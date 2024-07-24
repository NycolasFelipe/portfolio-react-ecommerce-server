# Loja Ecommerce | React.js, Node.js, Express, MySQL
Website completo de ecommerce para uma loja de eletrônicos, desenvolvido com as tecnologias React.js, Node.js e MySQL.

## Funcionalidades
* Conexão com banco de dados MySQL
* Criação, leitura, atualização e exclusão (CRUD) de dados
* Autenticação e autorização de usuários
* Integração com aplicação frontend React
* Implementação de rotas RESTful
* Manipulação de JSON
* Validação de dados
* Manipulação de erros

## Requisitos
* Node.js 14 ou superior
* npm ou yarn
* MySQL
* Vercel

## Instalação
1. Clonar o repositório da aplicação:
```bash
git clone https://github.com/NycolasFelipe/portfolio-react-ecommerce-server.git
```

2. Entrar no diretório da aplicação:
```bash
cd portfolio-react-ecommerce-server
```

3. Instalar as dependências:
```bash
npm install || yarn install
```

## Configuração

1. Criar um arquivo `.env` na raiz do diretório da aplicação e adicionar as seguintes variáveis de ambiente:

```
PORT = app port (default 3000)
DB_NAME = database name
DB_URI = database uri
DB_HOST = database host
DB_PORT = database port
DB_USER = database user
DB_PASSWORD = database user password
SENDGRID_API_KEY = sendgrid's api key to send custom email
```

2. Substituir os valores das variáveis de ambiente com as credenciais do seu banco de dados MySQL.


## Executar a aplicação

1. Executar o seguinte comando para iniciar a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

2. A aplicação estará acessível em `http://localhost:3000`.

## Hospedar na Vercel
1. Criar uma conta Vercel, caso ainda não tenha uma.
2. Acessar o console da Vercel e conectar o repositório Git da sua aplicação.
3. Selecionar a branch `main` para a implantação.
4. Clicar no botão "Deploy".

5. A aplicação estará acessível no URL fornecido pela Vercel.

## Uso
A aplicação fornece as seguintes APIs:
* `GET /products`: Retorna uma lista de todos os produtos do banco de dados.
* `GET /products/:id`: Retorna um produto específico pelo ID.

A aplicação frontend React consome essas APIs para interagir com o banco de dados.

