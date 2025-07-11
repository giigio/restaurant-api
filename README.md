# API de Restaurante

Uma API RESTful construída com Node.js e TypeScript para gerenciamento de operações de restaurante, incluindo mesas, pedidos e produtos.

## Funcionalidades

- **Gerenciamento de Produtos**

  - Criar, listar, atualizar e excluir produtos
  - Buscar produtos por nome
  - Acompanhamento de preços dos itens do menu

- **Gerenciamento de Mesas**

  - Listar mesas disponíveis
  - Acompanhar status e ocupação das mesas

- **Gerenciamento de Sessões de Mesa**

  - Criar e gerenciar sessões de mesa
  - Acompanhar horários de início e fim das sessões
  - Controlar status de ocupação das mesas

- **Gerenciamento de Pedidos**
  - Criar pedidos para sessões de mesa ativas
  - Listar pedidos por sessão de mesa
  - Calcular valor total e quantidades por sessão de mesa
  - Impedir pedidos para mesas fechadas
  - Acompanhar preços e quantidades individuais dos pedidos

## Stack Técnica

- **Node.js** - Ambiente de execução
- **TypeScript** - Linguagem de programação
- **Express** - Framework web
- **Knex.js** - Construtor de queries SQL e migrações de banco de dados
- **SQLite** - Banco de dados
- **Zod** - Validação de esquemas
- **Bruno** - Testes e documentação de API

## Estrutura do Projeto

```plaintext
restaurant-api/
├── src/
│   ├── controllers/      # Controladores de requisições
│   ├── database/
│   │   ├── migrations/   # Estrutura do banco de dados
│   │   ├── seeds/       # Dados de exemplo
│   │   └── types/       # Definições de tipos do banco
│   ├── middlewares/     # Middlewares do Express
│   ├── routes/          # Rotas da API
│   ├── utils/           # Funções utilitárias
│   └── server.ts        # Ponto de entrada da aplicação
├── bruno_api_restaurant_collection.json  # Coleção de testes da API
└── knexfile.ts          # Configuração do banco de dados
```

## Endpoints da API

### Produtos

- `GET /products` - Listar todos os produtos
- `POST /products` - Criar um novo produto
- `PUT /products/:id` - Atualizar um produto
- `DELETE /products/:id` - Excluir um produto

### Mesas

- `GET /tables` - Listar todas as mesas

### Sessões de Mesa

- `GET /tables-sessions` - Listar todas as sessões de mesa
- `POST /tables-sessions` - Criar uma nova sessão de mesa
- `PUT /tables-sessions/:id` - Atualizar uma sessão de mesa

### Pedidos

- `POST /orders` - Criar um novo pedido
- `GET /orders/table-session/:table_session_id` - Listar pedidos de uma sessão específica
- `GET /orders/table-session/:table_session_id/total` - Obter total e quantidade de uma sessão

## Configuração e Instalação

1. Clone o repositório
2. Instale as dependências:

   ```bash
   npm install
   # ou
   pnpm install
   ```

3. Execute as migrações do banco de dados:

   ```bash
   npm run knex -- migrate:latest
   # ou
   pnpm knex migrate:latest
   ```

4. (Opcional) Popule o banco de dados:

   ```bash
   npm run knex -- seed:run
   # ou
   pnpm knex seed:run
   ```

5. Inicie o servidor:

   ```bash
   npm run dev
   # ou
   pnpm dev
   ```

## Testes

O projeto inclui uma coleção Bruno API para testar todos os endpoints. Importe o arquivo `bruno_api_restaurant_collection.json` no Bruno para testar os endpoints da API.

## Tratamento de Erros

A API implementa tratamento centralizado de erros com tipos de erro personalizados e middleware. Cenários comuns de erro incluem:

- Validação de entrada inválida
- Recursos inexistentes
- Operações em mesas fechadas
- Restrições do banco de dados
