/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { screen } from "@testing-library/react";
import renderWithTheme from "../../utils/tests/renderWithTheme";
import AboutSection from "./AboutSection";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("AboutSection", () => {
  it("should have a h1 with the text About Me", () => {
    renderWithTheme(<AboutSection githubStars={0} projectsCompleted={0} />);
    const title = screen.getByRole("heading", { name: /About Me/ });
    expect(title).toBeVisible();
  });
  it("should have a picture", () => {
    renderWithTheme(<AboutSection githubStars={0} projectsCompleted={0} />);
    const image = screen.getByAltText("about me");
    expect(image).toBeVisible();
  });
  it("should have a download CV button", () => {
    renderWithTheme(<AboutSection githubStars={0} projectsCompleted={0} />);
    const button = screen.getByRole("button", { name: /Download CV/i });
    expect(button).toBeVisible();
  });
  it("should have a paragraph with a short description", () => {
    renderWithTheme(<AboutSection githubStars={0} projectsCompleted={0} />);
    const description = screen.getByRole("paragraph");
    expect(description).toBeVisible();
  });
  it("should have 3 badges", () => {
    renderWithTheme(<AboutSection githubStars={0} projectsCompleted={0} />);
    const badgeOne = screen.getByText(/Projects completed/i);
    const badgeTwo = screen.getByText(/Cups of Coffee/i);
    const badgeThree = screen.getByText(/Github Stars/i);
    expect(badgeOne).toBeVisible();
    expect(badgeTwo).toBeVisible();
    expect(badgeThree).toBeVisible();
  });
});
