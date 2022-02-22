import React from "react";
import TodoFrom from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  return (
    <div>
      <TodoFrom data-testid="helloworld" />
      <TodoList todos={[]} />
    </div>
  );
}

export default TodoApp;
