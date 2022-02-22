import { render } from "@testing-library/react";
import React from "react";
import TodoApp from "./TodoApp";

describe("<TodoApp />", () => {
  it("renders TodoForm and TodoList", () => {
    const { getByText, getByTestId } = render(<TodoApp />);
    getByText("등록"); // TodoApp에서 등록이란 문자열을 가진 엘리먼트가 있는지 (TodoForm에 있음)
    getByTestId("TodoList"); // TodoApp에서 TodoList라는 테스트 id를 가진 엘리먼트가 있는지 (TodoList에 있음)
  });
});
