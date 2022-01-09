import { render, screen } from "@testing-library/react";
import Footer from "../components/Layout/Footer";

describe("Footer", () => {
  test("renders Footer component", () => {
    render(<Footer />);
    // expect(screen.getByText(/Made by Neil Gebhard/i)).toBeInTheDocument();
    expect(screen.getByTestId("made-by")).toHaveTextContent(
      /Made by Neil Gebhard/i
    );
  });
});
