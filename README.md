# 🌱 Verdiário - API de Catalogação de Plantas

Uma API RESTful para catalogar e gerenciar plantas, desenvolvida como parte de um projeto full stack com foco em TypeScript, programação orientada a objetos, testes e boas práticas no back e front-end.

## Sobre o Projeto

**Verdiário** é uma aplicação voltada para entusiastas de plantas que desejam manter um controle organizado da sua coleção. Com ela, é possível registrar informações detalhadas sobre cada planta, desde dados básicos até histórico de cuidados e tratamentos.

## Funcionalidades

- **CRUD Completo**: criar, ler, atualizar e deletar plantas
- **Catalogação Detalhada**:
  - **Classificação Científica**: nome científico e dados botânicos
  - **Histórico de Cuidados**: adubação, tratamentos e controle de pragas
  - **Controle Temporal**: datas de chegada, últimos cuidados e status

## Tecnologias Utilizadas

### Backend (em desenvolvimento)
- Node.js
- TypeScript
- Express.js
- MongoDB
- Mongoose

### Frontend (em desenvolvimento)
- React
- Next.js

### Ferramentas e Documentação
- Swagger
- Jest
- ESLint

## Instalação e Configuração

### Pré-requisitos
- Node.js (v16 ou superior)
- npm ou yarn
- MongoDB (local ou MongoDB Atlas)

### Passos para Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/natbandeira/estufaPlantas.git
cd estufaPlantas
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as variáveis de ambiente:**
```bash
# Crie um arquivo .env na raiz do projeto
touch .env
```

```env
# Exemplo de configuração
DATABASE_URL=sua_string_de_conexao_aqui
```

4. **Execute o projeto:**
```bash
# Modo desenvolvimento
npm run dev

# Modo produção
npm start
```

## Endpoints da API

- `POST /planta` - Cria nova planta
- `GET /planta/:nomePlanta` - Mostra uma planta específica
- `PUT /planta/:nomePlanta` - Atualiza uma planta específica
- `GET /estufa` - Lista todas as plantas

### Próximas Features
- [ ] Sistema de autenticação
- [ ] Upload de imagens das plantas
- [ ] Lembretes de cuidados
- [ ] API terceira com mais infos de plantas

<!-- <div align="center">
  <sub>LinkedIn: [Natália Bandeira](https://linkedin.com/in/nataliabandeira)</sub>
</div> -->
