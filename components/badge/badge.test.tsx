import { screen } from "@testing-library/react";
import renderWithTheme from "../../utils/tests/renderWithTheme";
import Badge from "./Badge";

describe("Badge", () => {
  it("should render an icon", () => {
    renderWithTheme(
      <Badge name="test badge" iconClass="test-icon" number="9" />
    );
    const badgeIcon = screen.getByRole("img");
    expect(badgeIcon).toBeVisible();
    expect(badgeIcon).toHaveClass("test-icon");
  });
  it("should render a the badge name", () => {
    renderWithTheme(
      <Badge name="test badge" iconClass="test-icon" number="9" />
    );
    const badgeName = screen.getByText("test badge");
    expect(badgeName).toBeVisible();
  });
  it("should render the badge number", () => {
    renderWithTheme(
      <Badge name="test badge" iconClass="test-icon" number="9" />
    );
    const badgeNumber = screen.getByText("9");
    expect(badgeNumber).toBeVisible();
  });
});
