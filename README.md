#GymPass-introduction-Prisma.

Banco de dados de uma aplicação GymPass onde o usuário poderá se cadastrar e fazer o check-in nas academias cadastradas no sistema. Está sendo desenvolvido com NodeJs, no banco de dados do Prisma.

O uso do POSTGRESQL no Docker, utilizando o Docker Compose. Foi criado um controller para receber as requisições HTTP e tratar as informações, podendo realizar ações como validar dados, buscar informações do banco de dados e enviar uma resposta ao cliente,
implementando Repository Pattern e seus benefícios na organização do código. Projeto especifica uma API SOLID.
Uso do framework Fastify. Uso do Container do Docker.

______________________________________________________________________________________________________________________________________________________
______________________________________________________________________________________________________________________________________________________

------Estrutura do projeto | Integração com Prisma ORM------

- Uso da ferramenta Insomnia que permite fazer requisições HTTP de forma prática e intuitiva.
![tela1](https://github.com/user-attachments/assets/8bdcd5d5-29e3-454c-b3c9-12d61c7bdbba)

- Uso do Prisma Studio para visualização da tabela.
- Uso do bcryptjs para criar as hash das senhas.
![tela2](https://github.com/user-attachments/assets/0ceec192-01b2-4a37-a445-cb743a27d865)

______________________________________________________________________________________________________________________________________________________
______________________________________________________________________________________________________________________________________________________
  ------Design Pattern e Tests | Implementando Casos de uso------


- Conceito de InMemoryTestDatabase, que permite criar um banco de dados em memória para testes unitários, sem afetar o banco de dados real. Será criada a classe de repositório em memória dos usuários e implementada a switch de testes do use-case de criação de usuários, utilizando esse banco de dados em memória.

- Foi criado um Use-case para autenticação do usuário, realização da criação dos testes unitários e do controller.
- Foi aplicada a metodologia TDD (Test Driven Development), é uma abordagem de desenvolvimento de software em que os testes são escritos antes do código. A implementação seguirá o processo red-green-refactor, em que primeiro serão escritos
os testes para a funcionalidade, em seguida, a funcionalidade será implementada para passar nos testes e, por fim, será realizada uma refatoração para melhorar o código.

______________________________________________________________________________________________________________________________________________________
______________________________________________________________________________________________________________________________________________________
  ------Controllers | Testes E2E------

- Conceito de isolamento de ambiente nos testes end-to-end (e2e), com foco na necessidade de se ter um banco de dados de testes separados do banco de dados de produção. Será implementado um Test Environment do Vitest para o Prisma, que permitirá a criação de um ambiente de testes isolado para os testes e2e.
  
- O objetivo é implementar a funcionalidade do arquivo de ambiente do Prisma para o Vitest. Isso será feito manipulando a variável de ambiente DATABASE_URL para gerar uma nova URL com um schema único e executando as migrações.
  
- É implementado o teste end-to-end (e2e) para a criação de usuário, autenticação e perfil, além das rotas da academia e check-in na API, utilizando o pacote Supertest para realizar as requisições HTTP.

 _____________________________________________________________________________________________________________________________________________________
______________________________________________________________________________________________________________________________________________________
  ------Refresh Token | RBAC------

- O Refresh Token é uma técnica utilizada para renovar o token de autenticação após seu tempo de validade expirar. O Refresh Token é um token de longa duração que é gerado quando o usuário faz login com suas credenciais. Esse token é usado para obter um novo Access Token quando o antigo expira.
  
- Implementação do controller de refresh token, que irá verificar se o token de atualização está presente nos cookies e, se estiver válido, irá gerar um novo token JWT para o usuário.
  
- RBAC (Role-Based Access Control) é um modelo de controle de acesso baseado em funções, onde as permissões são atribuídas com base no papel ou função que um usuário possui dentro de uma organização.

- Criação de funções de usuário com permissões específicas e a validação dessas permissões em rotas e controllers. A implementação adequada do RBAC pode ajudar a garantir que apenas usuários autorizados possam acessar determinadas partes da aplicação e realizar ações específicas.


- Token de autenticação gerado com permissão de usuário normal.
![telamember](https://github.com/user-attachments/assets/f221b7a7-bcde-4751-a19c-d0dc8c7a7b49)

- Token de autenticação gerado com permissão de Admin.
![telaadmin](https://github.com/user-attachments/assets/8d258dc4-1398-4272-a8b7-9688ffaec7f2)

  -font: jwt.io

-Tecnologias utilizadas: JAVASCRIPT. TYPESCRIPT. NODEJS.

-Bibliotecas: Fastify, zod, prisma, bcryptjs, Supertest.
