import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title", () => {
  it("should display title", () => {
    render(<Title content="Title" />);

    expect(screen.getByText("Title")).toBeInTheDocument();
  });
});
