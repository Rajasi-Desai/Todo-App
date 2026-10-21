# TODO App

A simple todo task manager built with React 19. Add tasks with numeric priorities, keep track of completion, and organize your list. Tasks are saved in your browser so they remain available when you return.

You can find the deployment of this code [here](https://rajasi-desai.github.io/Todo-App)

## Features

- Add tasks with a priority number.
- Edit task text and priority.
- Mark tasks as complete or incomplete.
- Filter the list to show only incomplete tasks.
- Sort tasks by priority, from lowest to highest.
- Delete tasks you no longer need.
- Persist tasks in browser `localStorage`.

## Built with

- React 19
- Vite
- Lucide React icons

## Getting started

Install the project dependencies and start the local development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint. |
| `npm run deploy` | Deploy the production build to GitHub Pages. |

## Data storage

Tasks are stored in the browser's local storage under the `tasks` key. They are local to the browser and device where you use the app; no account or server is required.


The deployment configuration targets GitHub Pages at [rajasi-desai.github.io/Todo-App](https://rajasi-desai.github.io/Todo-App).

## Using the App

![TODO app showing the task form, priority field, filters, and example tasks](./public/images/todo-app-overview.png)

1. **Add a task:** Enter a task, choose its priority number, then select the **+** button.
2. **Manage a task:** Select its checkbox to mark it complete. Use the pencil button to edit it, or the trash button to delete it.
3. **Organize your list:** Select **Show only incomplete** to hide completed tasks. Select the sort button to order tasks by priority, ascending order.
4. **Come back later:** Your tasks are saved automatically in this browser.
