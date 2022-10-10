/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithTheme from "../../utils/tests/renderWithTheme";
import ProjectCard from "./ProjectCard";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("ProjectCard", () => {
  it("should display a toggle content button only on screens smaller than 961px", () => {
    renderWithTheme(
      <ProjectCard
        name="Project test name"
        description="Project test description"
        tag="next"
        image="/testImg"
        repoLink="https://www.github.com"
        siteLink="https://www.google.com"
      />
    );
    const toggleContentButton = screen.getByRole("button");
    expect(toggleContentButton).toHaveStyleRule("display", "none", {
      media: "(min-width:961px)",
    });
  });

  it("should render the project name, description and tag when the toggle content button is clicked", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <ProjectCard
        name="Project test name"
        description="Project test description"
        tag="next"
        image="/testImg"
        repoLink="https://www.github.com"
        siteLink="https://www.google.com"
      />
    );
    const toggleContentButton = screen.getByRole("button");
    await user.click(toggleContentButton);
    const name = screen.getByRole("heading", { name: "Project test name" });
    const description = screen.getByText("Project test description");
    const tag = screen.getByText("next");
    expect(tag).toBeVisible();
    expect(name).toBeVisible();
    expect(description).toBeVisible();
  });

  it("should render the project image", () => {
    renderWithTheme(
      <ProjectCard
        name="Project test name"
        description="Project test description"
        tag="next"
        image="/testImg"
        repoLink="https://www.github.com"
        siteLink="https://www.google.com"
      />
    );
    const image = screen.getByAltText("Project test name");
    expect(image).toBeVisible();
  });

  it("should render a button with a link to the project repository", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <ProjectCard
        name="Project test name"
        description="Project test description"
        tag="next"
        image="testImg"
        repoLink="https://www.github.com"
        siteLink="https://www.google.com"
      />
    );
    const toggleContentButton = screen.getByRole("button");
    await user.click(toggleContentButton);
    const repoButton = screen.getByTestId("repo-button");
    expect(repoButton).toBeVisible();
  });

  it("should render a button with a link to the project website when the toggle content button is clicked", async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <ProjectCard
        name="Project test name"
        description="Project test description"
        tag="next"
        image="testImg"
        repoLink="https://www.github.com"
        siteLink="https://www.google.com"
      />
    );
    const toggleContentButton = screen.getByRole("button");
    await user.click(toggleContentButton);
    const websiteButton = screen.getByTestId("website-button");
    expect(websiteButton).toBeVisible();
  });

  it("should not render the button with a link to the project website when the prop 'siteLink' is not provided", () => {
    renderWithTheme(
      <ProjectCard
        name="Project test name"
        description="Project test description"
        tag="next"
        image="testImg"
        repoLink="https://www.github.com"
      />
    );
    const websiteButton = screen.queryByTestId("website-button");
    expect(websiteButton).not.toBeInTheDocument();
  });
});
