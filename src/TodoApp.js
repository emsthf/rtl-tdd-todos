import React, { useCallback, useRef, useState } from "react";
import TodoFrom from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "TDD 배우기",
      done: true,
    },
    {
      id: 2,
      text: "react-testing-library 사용하기",
      done: true,
    },
  ]);
  const nextId = useRef(3); // 새로 추가 할 항목에서 사용할 id
  const onInsert = useCallback(
    (text) => {
      setTodos(
        // 기존 todos 뒤에 이어 붙이도록 concat 사용
        todos.concat({
          id: nextId.current, // id에는 nextId의 현재 값을 넣음
          text,
          done: false,
        })
      );
      nextId.current += 1;
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)) // 자바스크립트의 '=='은 메모리 번지수를 비교. '==='가 실제 값을 비교하는 수식
      );
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <div>
      <TodoFrom data-testid="helloworld" onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </div>
  );
}

export default TodoApp;
