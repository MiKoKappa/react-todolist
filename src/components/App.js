import React from "react";
import useStyles from "../styles/AppStyles";
import TodoApp from "./TodoApp";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <h1>
          todo<span>list</span>
        </h1>
        <h2>A simple todolist app built with React Hooks & Context</h2>
      </header>
      <TodoApp />
      <a href="https://github.com/MiKoKappa" className={classes.link}>
        <strong>Built by Mikołaj Tkaczyk</strong>
      </a>
      <a
        href="https://medium.com/@walkccc/build-a-todo-list-app-with-react-hooks-and-context-a7f8e9f158af"
        className={classes.link}
      >
        <strong>based on tutorial by &copy; Jay Chen</strong>
      </a>
    </div>
  );
}

export default App;
