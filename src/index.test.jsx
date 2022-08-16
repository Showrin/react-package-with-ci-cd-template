import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./index";

describe("App tests", () => {
  it("should contains the content", () => {
    render(<App />);
    const heading = screen.getByText(/Counter App/i);
    expect(heading).toBeInTheDocument();
  });
});
