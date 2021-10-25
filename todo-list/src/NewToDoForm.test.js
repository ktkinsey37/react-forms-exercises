import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewToDoForm from "./NewToDoForm";

it("renders without crashing", function() {
  render(<NewToDoForm />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<NewToDoForm />);
  expect(asFragment()).toMatchSnapshot();
});
