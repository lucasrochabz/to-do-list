## To-Do List

### Sobre

Este projeto é uma aplicação de **lista de tarefas (To-Do List)** desenvolvida em **JavaScript** com **React**, focada na organização de atividades de forma simples e eficiente. A aplicação permite criar, editar, concluir, restaurar e remover tarefas, além de contar com funcionalidades como filtros, busca e lixeira, proporcionando uma experiência completa de gerenciamento de tarefas.

A navegação é realizada com **React Router**, utilizando um layout reutilizável para padronização das páginas, e o gerenciamento de estado é feito por meio de **Context API** com custom hooks, garantindo uma arquitetura organizada e escalável.

A interface foi construída com foco em **componentização, boas práticas de desenvolvimento e experiência do usuário**, resultando em uma aplicação moderna, intuitiva e de fácil manutenção.

| Característica          | Descrição              |
| ----------------------- | ---------------------- |
| Tipo de aplicação       | SPA                    |
| Stack                   | React + Vite           |
| Estilo arquitetural     | Baseada em componentes |
| Gerenciamento de estado | Client-Side State      |
| Plataforma de execução  | Vercel                 |

### Tecnologias

| Tecnologia   | Descrição                |
| ------------ | ------------------------ |
| JavaScript   | Linguagem de programação |
| React        | Biblioteca de UI         |
| React Router | Rotas na aplicação       |
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
└── vite.config.js
```

### Encontrou algum problema?

Abra uma [issue](https://github.com/lucasrochabz/to-do-list/issues) com sua sugestão ou crítica.

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

### Anotações

- add depois framer-motion
- ilustrações para tarefas: No data, Morning Plans, Inbox cleanup, Done, To do list
- ilustrações para lixeira: Throw away, Clean up
