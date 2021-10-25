import React from "react";
import BoxList from "./BoxList"
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

it("renders without crashing", function() {
  render(<App />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add two new boxes and delete one", function() {
  const { getByLabelText, queryByText } = render(<App />);

  // no items yet
  expect(document.getElementsByClassName("box")).toBe([])
  // expect(queryByText("ice cream: 100")).not.toBeInTheDocument();

  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const colorInput = getByLabelText("Color:");
  const submitBtn = queryByText("Add a new box!")

  // fill out the form
  fireEvent.change(widthInput, { target: { value: 50 }});
  fireEvent.change(heightInput, { target: { value: 100 }});
  fireEvent.change(colorInput, {target: {value: "green"}})
  fireEvent.click(submitBtn);

  // item exists!
  expect(queryByText("ice cream: 100")).toBeInTheDocument();
});
