
#  API My NuvemLens

API desenvolvida para gerenciamento de fotos, usuários, comentários e pedidos na plataforma **My NuvemLens**.

##  Funcionalidades

-  Cadastro, listagem e busca de fotos
-  Cadastro e gerenciamento de usuários
-  Sistema de comentários nas fotos
-  Curtidas nas fotos
-  Cadastro e gerenciamento de produtos e pedidos
-  Autenticação com JWT
-  Upload de imagens

##  Tecnologias Utilizadas

- Node.js
- Express
- MySQL + Sequelize ORM
- JWT (Autenticação)
- Multer (Upload de imagens)
- Jest (Testes automatizados)

##  Como executar o projeto

###  Pré-requisitos:
- Node.js instalado
- MySQL rodando na sua máquina

###  Passos:

1. Clone os repositórios:

```bash
git clone https://github.com/Danietta894/API.git
git clone https://github.com/Danietta894/mynuvemlens.git
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o arquivo `.env` com suas informações:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=nome_do_banco
JWT_SECRET=sua_secret
```

4. Crie o banco no MySQL e execute (se estiver usando Sequelize CLI):

```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

5. Execute o projeto:

```bash
npm start
```

O servidor estará rodando em: `http://localhost:3000`.

##  Testes

Foram realizados os seguintes testes:

- ✔ Testes unitários: funções de validação e regras de negócio.
- ✔ Testes de integração: testes nas rotas principais (fotos, comentários e usuários).
- ✔ Testes de aceitação: realizados manualmente utilizando o Postman, simulando o funcionamento da API.

##  Rotas principais

| Método | Endpoint             | Descrição                |
|--------|-----------------------|--------------------------|
| POST   | `/api/auth/login`     | Login do usuário         |
| POST   | `/api/fotos`          | Cadastrar foto           |
| GET    | `/api/fotos`          | Listar fotos             |
| POST   | `/api/comentarios`    | Cadastrar comentário     |
| GET    | `/api/comentarios`    | Listar comentários       |
| POST   | `/api/auth/register`  | Cadastro de usuário      |

E outras rotas disponíveis para usuários, pedidos, curtidas e produtos.

  Demonstração

 Link para o vídeo demonstrando a API funcionando: [Acessar Demo](https://drive.google.com/drive/folders/1v2yOq2h7IxqkmguCXe9tFR3N6VZ1_VVB?sort=13&direction=a)

  Desenvolvedora

- **Daniella Nunes Tenório**  
[GitHub](https://github.com/Danietta894)

##  Licença

Este projeto está sob a licença MIT.

