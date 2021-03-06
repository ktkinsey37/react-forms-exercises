import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ToDoList from "./ToDoList";

it("renders without crashing", function() {
  render(<ToDoList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<ToDoList />);
  expect(asFragment()).toMatchSnapshot();
});