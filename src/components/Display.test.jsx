import React from "react";
import { render, screen } from "@testing-library/react";
import Display from "./Display";

describe("Display tests", () => {
  it("should contains the content", () => {
    render(<Display count={0} />);
    const heading = screen.getByText(/0/i);

    expect(heading).toBeInTheDocument();
  });
});
