import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("<Home />", () => {
  it("renders welcome message", () => {
    render(<Home />);

    expect(screen.getByText("Hello!")).toBeInTheDocument();
  });
});
