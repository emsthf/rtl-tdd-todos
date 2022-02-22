import React, { useCallback } from "react";

function TodoItem({ todo, onToggle, onRemove }) {
  const { id, text, done } = todo; // prop으로 들어론 todo를 개별로 분리
  const toggle = useCallback(() => onToggle(id), [id, onToggle]);
  const remove = useCallback(() => onRemove(id), [id, onRemove]);

  return (
    <li>
      <span style={{ textDecration: done ? "line-through" : "none" }} onClick={toggle}>
        {text}
      </span>
      <button onClick={remove}>삭제</button>
    </li>
  );
}

export default TodoItem;
