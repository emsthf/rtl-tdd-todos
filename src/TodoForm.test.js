import { fireEvent, render } from "@testing-library/react";
import React from "react";
import TodoForm from "./TodoForm";

describe("<TodoForm />", () => {
  it("has input and a button", () => {
    const { getByText, getByPlaceholderText } = render(<TodoForm />);
    getByPlaceholderText("할 일을 입력하세요~"); // input이 있는지 없는지
    getByText("등록"); // button이 있는지 없는지
  });

  it("change input", () => {
    const { getByPlaceholderText } = render(<TodoForm />);
    const input = getByPlaceholderText("할 일을 입력하세요~");

    fireEvent.change(input, { target: { value: "TDD 배우기" } }); // json 타입으로 변경할 값을 적어주면 된다
    expect(input).toHaveAttribute("value", "TDD 배우기"); // value라는 속성이 'TDD 배우기'를 가지고 있는지
    // 변화가 감지되려면 useState를 사용해야 한다
  });

  it("call onInsert and clears input", () => {
    const onInsert = jest.fn(); // mock 함수
    const { getByText, getByPlaceholderText } = render(<TodoForm onInsert={onInsert} />);
    const input = getByPlaceholderText("할 일을 입력하세요~");
    const button = getByText("등록");

    fireEvent.change(input, { target: { value: "TDD 배우기" } });
    fireEvent.click(button);

    expect(onInsert).toBeCalledWith("TDD 배우기");
    expect(input).toHaveAttribute("value", ""); // 버튼 클릭 후 인풋이 초기화 되는지
  });
});
