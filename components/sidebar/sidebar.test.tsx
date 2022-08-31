import { screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { StyledSidebar } from "./sidebarStyles";
import renderWithTheme from "../../utils/tests/renderWithTheme";

describe("Sidebar", () => {
  it("should render 7 navbar items", () => {
    renderWithTheme(<Sidebar showSidebar />);
    const navbarItems = screen.getAllByRole("listitem");
    expect(navbarItems).toHaveLength(7);
  });

  it("should render the website logo", () => {
    renderWithTheme(<Sidebar showSidebar />);
    const logo = screen.getByRole("img");
    expect(logo).toBeVisible();
  });

  it("should display the copyright text", () => {
    renderWithTheme(<Sidebar showSidebar />);
    const copyrightText = screen.getByText("© 2022 - 2023.");
    expect(copyrightText).toBeVisible();
  });

  it("should not display the copyright text in screens with width smaller or equal do 1024px", () => {
    renderWithTheme(<Sidebar showSidebar />);
    const copyrightText = screen.getByText("© 2022 - 2023.");
    expect(copyrightText).toHaveStyleRule("display", "none", {
      media: "(max-width:1024px)",
    });
  });

  it("should not be visible in screens with width smaller or equal to 960px when StyledSidebar receives the value false in the prop 'visible'", () => {
    renderWithTheme(<StyledSidebar visible={false} />);
    const sidebar = screen.getByRole("complementary");
    expect(sidebar).toHaveStyleRule("display", "none", {
      media: "(max-width:960px)",
    });
  });

  it("should be visible in screens with width smaller or equal to 960px when StyledSidebar receives the value true in the prop 'visible'", () => {
    renderWithTheme(<StyledSidebar visible />);
    const sidebar = screen.getByRole("complementary");
    expect(sidebar).toHaveStyleRule("display", "flex", {
      media: "(max-width:960px)",
    });
  });
});
