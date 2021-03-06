import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchInput from "../components/Search/SearchInput";

describe("SearchInput", () => {
  test("renders SearchInput component", () => {
    render(<SearchInput />);
    const textbox = screen.getByRole("searchbox");
    userEvent.type(textbox, "JavaScript");
    expect(textbox).toHaveValue("JavaScript");
  });
});
