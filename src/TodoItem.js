import React from "react";

function TodoItem({ todo }) {
  const { id, text, done } = todo; // prop으로 들어론 todo를 개별로 분리

  return (
    <li>
      <span>{text}</span>
      <button>삭제</button>
    </li>
  );
}

export default TodoItem;
