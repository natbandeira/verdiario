# 🌱 Verdiário - API de Catalogação de Plantas

Uma API RESTful para catalogar e gerenciar plantas, desenvolvida como parte de um projeto full stack com foco em TypeScript, programação orientada a objetos, testes e boas práticas no back e front-end.

## Sobre o Projeto

**Verdiário** é uma aplicação voltada para entusiastas de plantas que desejam manter um controle organizado da sua coleção. Com ela, é possível registrar informações detalhadas sobre cada planta, desde dados básicos até histórico de cuidados e tratamentos.

## Funcionalidades

- **CRUD completo**: criar, ler, atualizar e deletar plantas
- **Catalogação detalhada**:
  - **Controle temporal** com datas de chegada, últimos cuidados e status
  - **Histórico de cuidados** como adubação, tratamentos e controle de pragas


## Tecnologias Utilizadas

### Backend
- Node.js
- TypeScript
- Express.js
- MongoDB
- Mongoose

### Frontend
- React
- Next.js

### Documentação e testes
- Swagger
- Jest

### Pré-requisitos
- Node.js (v16 ou superior)
- npm ou yarn
- MongoDB (local ou MongoDB Atlas)

## Estrutura do projeto

Este repositório utiliza um modelo de **monorepo**, onde backend e frontend
são aplicações independentes, cada uma com seu próprio `package.json`.

### Passos para rodar localmente

1. **Clone o repositório:**
```bash
git clone https://github.com/natbandeira/verdiario.git
cd verdiario
```

2. **Instale as dependências do back e do front:**
```bash
cd backend
npm install
```

```bash
cd frontend
npm install
```

3. **Configure as variáveis de ambiente:**
```bash
# Crie um arquivo .env dentro da pasta backend
cd backend
touch .env
```

```env
# Exemplo de arquivo .env
MONGO_URI=sua_string_de_conexao_aqui
```

4. **Execute o projeto:**
```bash
# Modo desenvolvimento
npm run dev

# Modo produção
npm start
```



<!-- <div align="center">
  <sub>LinkedIn: [Natalia Bandeira](https://linkedin.com/in/nataliabandeira)</sub>
</div> -->
