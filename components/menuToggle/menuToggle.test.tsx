import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MenuToggle from "./MenuToggle";
import renderWithTheme from "../../utils/tests/renderWithTheme";

describe("MenuToggle", () => {
  it("should calls the onClick function 1x when the button is clicked", async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    renderWithTheme(<MenuToggle onClick={onClick} sidebarOpen />);
    const menuToggleButton = screen.getByTestId("menuToggle");
    await user.click(menuToggleButton);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should only be visible in screens with width smaller or equal to 768px", () => {
    const onClick = jest.fn();
    renderWithTheme(<MenuToggle onClick={onClick} sidebarOpen />);
    const menuToggleButton = screen.getByTestId("menuToggle");
    expect(menuToggleButton).toHaveStyle("display: none");
    expect(menuToggleButton).toHaveStyleRule("display", "flex", {
      media: "(max-width:960px)",
    });
  });
});
