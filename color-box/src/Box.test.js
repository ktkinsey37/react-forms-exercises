import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";

const box = {color:"green", width:"50", height:"50", id:"0"}


it("matches snapshot", function() {
  const { asFragment } = render(<Box box={box} />);
  expect(asFragment()).toMatchSnapshot();
});

it("renders without crashing", function() {
  render(<Box box={box} />);
});