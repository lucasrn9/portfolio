/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
import { screen } from "@testing-library/react";
import HomeSection from "./HomeSection";
import renderWithTheme from "../../utils/tests/renderWithTheme";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("HomeSection", () => {
  it("should have a profile picture", () => {
    renderWithTheme(<HomeSection />);
    const profilePicture = screen.getByAltText(/lucas ribeiro/i);
    expect(profilePicture).toBeVisible();
  });

  it("should have a title with the person name", () => {
    renderWithTheme(<HomeSection />);
    const name = screen.getByRole("heading", { name: "Lucas Ribeiro" });
    expect(name).toBeVisible();
  });

  it("should have an occupation", () => {
    renderWithTheme(<HomeSection />);
    const occupation = screen.getByText(/I'm a Front-End developer/i);
    expect(occupation).toBeVisible();
  });

  it("should have 3 social media links (github,linkedin,gmail)", () => {
    renderWithTheme(<HomeSection />);
    const socialMediaLinks = screen.getAllByRole("link");
    const github = socialMediaLinks[0];
    const linkedin = socialMediaLinks[1];
    const gmail = socialMediaLinks[2];
    expect(socialMediaLinks).toHaveLength(3);
    expect(github).toBeVisible();
    expect(github).toHaveAttribute("href", "https://github.com/lucasrn9");
    expect(linkedin).toBeVisible();
    expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/lucas-ribeiro-85487920b/"
    );
    expect(gmail).toBeVisible();
    expect(gmail).toHaveAttribute(
      "href",
      "https://mail.google.com/mail/u/0/?fs=1&to=lucas.rn00@gmail.com&tf=cm"
    );
  });

  it("should have a contact button", () => {
    renderWithTheme(<HomeSection />);
    const contactButton = screen.getByRole("button", { name: "Contact Me" });
    expect(contactButton).toBeVisible();
  });
});
