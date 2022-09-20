/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
import { screen } from "@testing-library/react";
import renderWithTheme from "../../utils/tests/renderWithTheme";
import ProjectCard from "./ProjectCard";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("ProjectCard", () => {
  it("should render the project name and description", () => {
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
    const name = screen.getByRole("heading", { name: "Project test name" });
    const description = screen.getByText("Project test description");
    expect(name).toBeVisible();
    expect(description).toBeVisible();
  });

  it("should render the project tag", () => {
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
    const tag = screen.getByText("next");
    expect(tag).toBeVisible();
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

  it("should render a button with a link to the project repository", () => {
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
    const repoButton = screen.getByTestId("repo-button");
    expect(repoButton).toBeVisible();
  });

  it("should render a button with a link to the project website", () => {
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
    const websiteButton = screen.getByTestId("website-button");
    expect(websiteButton).toBeVisible();
  });
});
