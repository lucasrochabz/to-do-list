# To-do list

- React + Vite
- Estrutura de pastas escalável
- Pronto para proteção de rotas
- Abstração de client HTTP
- Suporte a schemas de validação
- Pronto para API de Contexto
- Suporte a módulos CSS
- Importações de alias configuradas

### Requisitos funcionais

- [ ] Criar, Editar, Excluir tarefas
- [ ] Marcar como concluída
- [ ] Filtrar tarefas
- [ ] Ordenar tarefas
- [ ] Persistir dados via API

### Requisitos não funcionais

- [ ] Interface responsiva
- [ ] Performance otimizada
- [ ] Validação de dados
- [ ] Tratamento de erros
- [ ] Código modular e tipado
- [ ] Acessibilidade básica

### Estrutura do projeto

```bash
to-do-list/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Button/
│   │   ├── EmptyState/
│   │   ├── Filter/
│   │   ├── Footer/
│   │   ├── MainLayout/
│   │   ├── Search/
│   │   ├── Todo/
│   │   ├── TodoForm/
│   │   ├── TodoList/
│   │   └── TrashList/
│   │
│   ├── contexts/
│   │   ├── TodoContext.js
│   │   └── TodoProvider.jsx
│   │
│   ├── hooks/
│   ├── mocks/
│   │   └── todos.js
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── NotFound/
│   │   └── TrashPage/
│   │
│   ├── routes/
│   │   └── app.routes.jsx
│   │
│   ├── styles/
│   │   ├── animations/
│   │   └── index.css
│   │
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

### Anotações

- add depois framer-motion
