import React from "react";

function TodoItem({ todo, onToggle, onRemove }) {
  const { id, text, done } = todo; // prop으로 들어론 todo를 개별로 분리

  return (
    <li>
      <span
        style={{ textDecration: done ? "line-through" : "none" }}
        onClick={() => onToggle(id)}
      >
        {text}
      </span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </li>
  );
}

export default TodoItem;
