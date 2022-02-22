import React, { useState, useCallback } from "react";

function TodoForm({ onInsert }) {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      onInsert(value); // submit이 되면 value를 가져와서 onInsert에 넣어줌
      setValue(""); // input 초기화
      e.preventDefault(); // 새로고침 방지
    },
    [onInsert, value]
  );

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요~" value={value} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoForm;
