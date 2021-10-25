import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ToDoList from './ToDoList';
import App from "./App";

it("renders without crashing", function() {
  render(<App />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new todo and delete it", function() {
  const { getByLabelText, queryByText } = render(<ToDoList />);

  // no items yet
  expect(queryByText("walk the dog")).not.toBeInTheDocument();

  const todoInput = getByLabelText("ToDo:");
  const submitBtn = queryByText("Add a new ToDo!")

  // fill out the form
  fireEvent.change(todoInput, { target: { value: "walk the dog" }});
  fireEvent.click(submitBtn);

  // item exists!
  expect(queryByText("walk the dog")).toBeInTheDocument();

  // delete item

  const deleteTodo = queryByText("X")

  fireEvent.click(deleteTodo)

  expect(queryByText("walk the dog")).not.toBeInTheDocument();

});
