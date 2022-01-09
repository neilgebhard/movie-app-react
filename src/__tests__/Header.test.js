import { render, screen } from "@testing-library/react";
import Header from "../components/Layout/Header";

describe("Header", () => {
  test("renders Header component", () => {
    render(<Header />);
    expect(screen.getByText(/Movies/)).toBeInTheDocument();
  });
});
