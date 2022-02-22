import { fireEvent, render } from "@testing-library/react";
import React from "react";
import TodoApp from "./TodoApp";

describe("<TodoApp />", () => {
  it("renders TodoForm and TodoList", () => {
    const { getByText, getByTestId } = render(<TodoApp />);

    getByText("등록"); // TodoApp에서 등록이란 문자열을 가진 엘리먼트가 있는지 (TodoForm에 있음)
    getByTestId("TodoList"); // TodoApp에서 TodoList라는 테스트 id를 가진 엘리먼트가 있는지 (TodoList에 있음)
  });

  it("renders two defaults todos", () => {
    const { getByText } = render(<TodoApp />);

    getByText("TDD 배우기");
    getByText("react-testing-library 사용하기");
  });

  it("create new todo", () => {
    const { getByPlaceholderText, getByText } = render(<TodoApp />);

    // input에 값을 입력
    fireEvent.change(getByPlaceholderText("할 일을 입력하세요~"), {
      target: { value: "새 항목 추가 하기" }, // {tartget:} 안에는 json 문법으로 작성
    });
    // 서브밋 이벤트 발생시키기
    fireEvent.click(getByText("등록"));

    getByText("새 항목 추가 하기"); // 이렇게 렌더링이 되는가
  });

  it("toggle todo", () => {
    const { getByText } = render(<TodoApp />);
    const todoText = getByText("TDD 배우기");

    // expect(todoText).toHaveStyle("text-decoration: line-through;"); // 이 스타일이 있는가

    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle("text-decoration: line-through;");

    fireEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration: line-through;");
  });
});
