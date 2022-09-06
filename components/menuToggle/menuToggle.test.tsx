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

  it("should show the icon 'icon-menu' when the prop sidebarOpen is false", () => {
    const onClick = jest.fn();
    renderWithTheme(<MenuToggle onClick={onClick} sidebarOpen={false} />);
    const icon = screen.getByTestId("menuToggleIcon");
    expect(icon).toHaveClass("icon-menu");
  });

  it("should show the icon-close when the prop sidebarOpen is true", () => {
    const onClick = jest.fn();
    renderWithTheme(<MenuToggle onClick={onClick} sidebarOpen />);
    const icon = screen.getByTestId("menuToggleIcon");
    expect(icon).toHaveClass("icon-close");
  });

  it("should should be 130px left when the prop sidebarOpen is true", () => {
    const onClick = jest.fn();
    renderWithTheme(<MenuToggle onClick={onClick} sidebarOpen />);
    const menuToggleButton = screen.getByTestId("menuToggle");
    expect(menuToggleButton).toHaveStyle("left: 130px");
  });

  it("should be 0px left when the prop sidebarOpen is false", () => {
    const onClick = jest.fn();
    renderWithTheme(<MenuToggle onClick={onClick} sidebarOpen={false} />);
    const menuToggleButton = screen.getByTestId("menuToggle");
    expect(menuToggleButton).toHaveStyle("left: 0px");
  });
});
