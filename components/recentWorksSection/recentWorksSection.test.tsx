/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithTheme from "../../utils/tests/renderWithTheme";
import RecentWorksSection from "./RecentWorksSection";
import light from "../../theme/light";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("RecentWorksSection", () => {
  it("should render the section title", () => {
    renderWithTheme(<RecentWorksSection />);
    const title = screen.getByRole("heading", { name: /Recent Works/ });
    expect(title).toBeVisible();
  });

  it("should have 5 filters", () => {
    renderWithTheme(<RecentWorksSection />);
    const everything = screen.getByText("Everything");
    const next = screen.getByText("Next");
    const react = screen.getByText("React");
    const htmlAndCss = screen.getByText("HTML & CSS");
    const node = screen.getByText("Node");
    expect(everything).toBeVisible();
    expect(next).toBeVisible();
    expect(react).toBeVisible();
    expect(htmlAndCss).toBeVisible();
    expect(node).toBeVisible();
  });

  it("should start with the everything filter selected", () => {
    renderWithTheme(<RecentWorksSection />);
    const everythingFilter = screen.getByText("Everything");
    expect(everythingFilter).toBeVisible();
    expect(everythingFilter).toHaveStyle(
      `background-color: ${light.colors.tertiary} `
    );
  });

  it("should unselect the everything filter when you select any other filter", async () => {
    renderWithTheme(<RecentWorksSection />);
    const user = userEvent.setup();
    const everythingFilter = screen.getByText("Everything");
    const nextFilter = screen.getByText("Next");
    const reactFilter = screen.getByText("React");
    expect(everythingFilter).toBeVisible();
    expect(nextFilter).toBeVisible();
    expect(reactFilter).toBeVisible();
    expect(everythingFilter).toHaveStyle(
      `background-color: ${light.colors.tertiary} `
    );
    await user.click(nextFilter);
    await user.click(reactFilter);
    expect(nextFilter).toHaveStyle(
      `background-color: ${light.colors.tertiary} `
    );
    expect(reactFilter).toHaveStyle(
      `background-color: ${light.colors.tertiary} `
    );
    expect(everythingFilter).not.toHaveStyle(
      `background-color: ${light.colors.tertiary} `
    );
  });

  it("should unselect all the other filters when the everything filter is selected", async () => {
    renderWithTheme(<RecentWorksSection />);
    const user = userEvent.setup();
    const everythingFilter = screen.getByText("Everything");
    const nextFilter = screen.getByText("Next");
    const reactFilter = screen.getByText("React");
    expect(everythingFilter).toBeVisible();
    expect(nextFilter).toBeVisible();
    expect(reactFilter).toBeVisible();
    expect(everythingFilter).toHaveStyle(
      `background-color: ${light.colors.tertiary} `
    );
    await user.click(nextFilter);
    await user.click(reactFilter);
    expect(nextFilter).toHaveStyle(
      `background-color: ${light.colors.tertiary} `
    );
    expect(reactFilter).toHaveStyle(
      `background-color: ${light.colors.tertiary} `
    );
    expect(everythingFilter).not.toHaveStyle(
      `background-color: ${light.colors.tertiary} `
    );
    await user.click(everythingFilter);
    expect(everythingFilter).toHaveStyle(
      `background-color: ${light.colors.tertiary} `
    );
    expect(nextFilter).not.toHaveStyle(
      `background-color: ${light.colors.tertiary} `
    );
    expect(reactFilter).not.toHaveStyle(
      `background-color: ${light.colors.tertiary} `
    );
  });
});
