import { expect, describe, it, beforeEach } from "vitest"
import { InMemoryGymsRepository } from "../repositories/in-memory/in-memory-gyms-repository"
import { SearchGymsUseCase } from "./search-gyms"
import { FetchNearbyGymsUseCase } from "./fetch-nearby-gyms"

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe("Fetch Neayby Gyms Use Case", () => {
    beforeEach(async () => {
        gymsRepository = new InMemoryGymsRepository()
        sut = new FetchNearbyGymsUseCase(gymsRepository)

    })

    it("should be able to fetch nearby gyms", async () => {
        await gymsRepository.create({
            title: "Near Gym",
            description: null,
            phone: null,
            latitude: -15.8071331,
            longitude: -47.8649488,
        })

        await gymsRepository.create({
            title: "Far Gym",
            description: null,
            phone: null,
            latitude: -15.9071331,
            longitude: -47.9649488,
        })

        const { gyms } = await sut.execute({
            userLatitude: -15.8071331,
            userLongitude: -47.8649488  
        })

        expect(gyms).toHaveLength(1)
        expect(gyms).toEqual([
            expect.objectContaining({ title: "Near Gym" }),
        ])
    })
})