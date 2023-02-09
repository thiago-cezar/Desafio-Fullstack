# Desafio Fullstack Back

Este é um repositório de uma API que realiza o cadastro de usuários e seus contatos. Ela foi construída com Node.js e TypeScript e utiliza as seguintes tecnologias:

- bcrypt
- class-transformer
- dotenv
- express
- jsonwebtoken
- express-async-errors
- reflect-metadata
- typeorm

## Instalação

Para clonar este repositório, você precisa ter o Git instalado em sua máquina. Então, abra o terminal e digite:

```ruby
$ git clone git@github.com:thiago-cezar/Desafio-Fullstack-Back.git
```

Acesse a pasta do projeto clonado:

```ruby
$ cd Desafio-Fullstack-Back
```

Instale as dependências necessárias:

```ruby
$ npm install
```

## Rotas da API

A API possui as seguintes rotas para o CRUD de usuários:

- POST /users: Cadastra um novo usuário
- GET /users: Lista todos os usuários
- PATCH /users/:id: Atualiza um usuário existente
- DELETE /users/:id: Deleta um usuário existente

### E as seguintes rotas para o CRUD de contatos:

- POST /user/contacts: Cadastra um novo contato
- GET /user/contacts: Lista todos os contatos
- PATCH /user/contacts/:id: Atualiza um contato existente
- DELETE /user/contacts/:id: Deleta um contato existente

## Iniciando a API

Para iniciar a API, basta executar o seguinte comando no terminal:

```ruby
$ npm start
```

A API estará disponível na seguinte URL: http://localhost:3000/
