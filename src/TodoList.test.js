import { fireEvent, render } from "@testing-library/react";
import React from "react";
import TodoList from "./TodoList";

describe("<TodoList />", () => {
  const sampleTodos = [
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
  ];

  it("renders todos property", () => {
    const { getByText } = render(<TodoList todos={sampleTodos} />);

    getByText(sampleTodos[0].text);
    getByText(sampleTodos[1].text); // 글자가 잘 나오는지
  });

  it("calls onToggle and on onRemove", () => {
    const onToggle = jest.fn(); // mock 함수 생성
    const onRemove = jest.fn();
    const { getByText, getAllByText } = render(
      <TodoList todos={sampleTodos} onToggle={onToggle} onRemove={onRemove} />
    );

    fireEvent.click(getByText(sampleTodos[0].text)); // 0번 인덱스를 클릭하면
    expect(onToggle).toBeCalledWith(sampleTodos[0].id); // 0번 id가 호출이 되는지

    fireEvent.click(getAllByText("삭제")[0]); // 삭제라는 글자가 있는 것을 다 들고와서 0번째 인덱스(첫번째)를 누르면
    expect(onRemove).toBeCalledWith(sampleTodos[0].id); // 0번 id가 호출이 되는지
  });
});
