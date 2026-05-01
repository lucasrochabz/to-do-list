## To-Do List

<p align="center">
  <img src="docs/images/todo-mobile.png" width="250px" />
  <img src="docs/images/trash-mobile.png" width="250px" />
</p>

### Sobre

Este é um projeto de lista de tarefas (To-Do List) desenvolvido com React e Vite, utilizando arquitetura SPA (Single Page Application). A aplicação permite criar, editar, concluir, restaurar e excluir tarefas, além de oferecer filtros, busca e lixeira para gerenciamento completo das atividades.

O estado global é gerenciado com Context API combinada com custom hooks, garantindo uma estrutura organizada e escalável. As tarefas são persistidas no localStorage, permitindo manter os dados mesmo após recarregar a aplicação. A navegação é feita com React Router.

### Funcionalidades

- [x] Criar, editar e excluir tarefas
- [x] Marcar tarefas como concluídas
- [x] Sistema de busca
- [x] Filtros por status
- [x] Lixeira com restauração
- [x] Persistência de dados no localStorage

### Preview

Acesse o projeto online:
https://todolistlucas.vercel.app/

### Tecnologias

| Tecnologia   | Descrição                |
| ------------ | ------------------------ |
| TypeScript   | Linguagem de programação |
| React        | Biblioteca de UI         |
| React Router | Rotas na aplicação       |
| Context API  | Gerenciamento de estado  |
| Vite         | Build tool               |
| HTML         | Estrutura de páginas     |
| CSS Modules  | Estilos modulares        |

### Requisitos

- Node na versão 20.19 ou superior
- NPM na versão 10 ou superior.

### Como instalar?

1. Faça o clone do projeto.
2. Abra o terminal e navegue até a pasta do projeto.
3. Instale as dependências usando o comando:
   ```bash
   npm install
   ```
4. Inicie o servidor localmente com o comando:
   ```bash
   npm run dev
   ```

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
│   │   ├── storageKeys.ts
│   │   └── todoFilter.ts
│   │
│   ├── contexts/
│   │   ├── TodoContext.ts
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

### Encontrou algum problema?

Abra uma [issue](https://github.com/lucasrochabz/to-do-list/issues) com sua sugestão ou crítica.
