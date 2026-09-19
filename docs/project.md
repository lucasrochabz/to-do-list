### Estrutura do projeto

```bash
to-do-list/
├── docs/
│   └── images/
│
├── public/
├── src/
│   ├── assets/
│   │   └── illustrations/
│   │
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
│   ├── constants/
│   │   ├── routes.ts
│   │   ├── storageKeys.ts
│   │   └── todoFilters.ts
│   │
│   ├── contexts/
│   │   ├── routes.ts
│   │   ├── TodoProvider.tsx
│   │   └── useTodo.ts
│   │
│   ├── mocks/
│   │   └── todos.ts
│   │
│   ├── pages/
│   │   ├── NotFound/
│   │   ├── TodoPage/
│   │   └── TrashPage/
│   │
│   ├── routes/
│   │   └── app.routes.tsx
│   │
│   ├── styles/
│   │   ├── animations/
│   │   ├── tokens/
│   │   └── index.css
│   │
│   ├── types/
│   │   ├── button.ts
│   │   ├── todo.ts
│   │   └── trash.ts
│   │
│   ├── utils/
│   ├── App.tsx
│   ├── env.d.ts
│   └── main.tsx
│
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```
