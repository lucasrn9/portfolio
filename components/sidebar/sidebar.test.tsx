import { screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { StyledSidebar } from "./sidebarStyles";
import renderWithTheme from "../../utils/tests/renderWithTheme";

describe("Sidebar", () => {
  it("should render 7 navbar items", () => {
    renderWithTheme(<Sidebar />);
    const navbarItems = screen.getAllByRole("listitem");
    expect(navbarItems).toHaveLength(7);
  });

  it("should render the website logo", () => {
    renderWithTheme(<Sidebar />);
    const logo = screen.getByRole("img");
    expect(logo).toBeVisible();
  });

  it("should display the copyright text", () => {
    renderWithTheme(<Sidebar />);
    const copyrightText = screen.getByText("© 2022 - 2023.");
    expect(copyrightText).toBeVisible();
  });

  it("should not display the copyright text in screens with width smaller or equal do 768px", () => {
    renderWithTheme(<Sidebar />);
    const copyrightText = screen.getByText("© 2022 - 2023.");
    expect(copyrightText).toHaveStyleRule("display", "none", {
      media: "(max-width:768px)",
    });
  });

  it("should not be visible in screens with width smaller or equal to 768px when StyledSidebar receives the value false in the prop 'visible'", () => {
    renderWithTheme(<StyledSidebar visible={false} />);
    const sidebar = screen.getByRole("complementary");
    expect(sidebar).toHaveStyleRule("display", "none", {
      media: "(max-width:768px)",
    });
  });

  it("should be visible in screens with width smaller or equal to 768px when StyledSidebar receives the value true in the prop 'visible'", () => {
    renderWithTheme(<StyledSidebar visible />);
    const sidebar = screen.getByRole("complementary");
    expect(sidebar).toHaveStyleRule("display", "flex", {
      media: "(max-width:768px)",
    });
  });
});
