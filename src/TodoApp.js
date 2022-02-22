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

  return (
    <div>
      <TodoFrom data-testid="helloworld" onInsert={onInsert} />
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoApp;
