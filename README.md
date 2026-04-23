## To-Do List

<p align="center">
  <img src="docs/images/todo-mobile.png" />
  <img src="docs/images/trash-mobile.png" />
</p>

### Sobre

Este é um projeto de lista de tarefas (To-Do List) desenvolvido com React e Vite, utilizando arquitetura SPA (Single Page Application). A aplicação permite criar, editar, concluir, restaurar e excluir tarefas, além de oferecer filtros, busca e lixeira para gerenciamento completo das atividades.

O estado global é gerenciado com Context API combinada com custom hooks, garantindo uma estrutura organizada e escalável. A navegação é feita com React Router.

### Preview

Acesse o projeto online:
https://todolistlucas.vercel.app/

### Tecnologias

| Tecnologia   | Descrição                |
| ------------ | ------------------------ |
| JavaScript   | Linguagem de programação |
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
│   │   └── storageKeys.js
│   │
│   ├── contexts/
│   │   ├── TodoContext.js
│   │   ├── TodoProvider.jsx
│   │   └── useTodo.js
│   │
│   ├── mocks/
│   │   └── todos.js
│   │
│   ├── pages/
│   │   ├── NotFound/
│   │   ├── TodoPage/
│   │   └── TrashPage/
│   │
│   ├── routes/
│   │   └── app.routes.jsx
│   │
│   ├── styles/
│   │   ├── animations/
│   │   ├── tokens/
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
├── vercel.json
└── vite.config.js
```

### Encontrou algum problema?

Abra uma [issue](https://github.com/lucasrochabz/to-do-list/issues) com sua sugestão ou crítica.
