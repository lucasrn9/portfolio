/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { screen } from "@testing-library/react";
import renderWithTheme from "../../utils/tests/renderWithTheme";
import AcademicSection from "./AcademicSection";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("AcademicSection", () => {
  it("should render the section title", () => {
    renderWithTheme(<AcademicSection />);
    const sectionTitle = screen.getByRole("heading", { name: "Academic" });
    expect(sectionTitle).toBeVisible();
  });
  it("should render 6 academic experiences", () => {
    renderWithTheme(<AcademicSection />);
    const academicExperienceOne = screen.getByText(
      "Technologist in Informatics for Business - FATEC SBC"
    );
    const academicExperienceTwo = screen.getByText("English - Alt Idiomas");
    const academicExperienceThree = screen.getByText(
      "Bootcamp MRV Front End SPA Developer - Digital Innovation One"
    );
    const academicExperienceFour = screen.getByText(
      "Excel Intermediate & Excel Advanced - Fundação Bradesco"
    );
    const academicExperienceFive = screen.getByText(
      "Hardware and Computers Maintenance - Líder Centro de Profissões"
    );
    const academicExperienceSix = screen.getByText(
      "Windows, Office, Typing, Secretariat - OnByte Formação Profissional"
    );
    expect(academicExperienceOne).toBeVisible();
    expect(academicExperienceTwo).toBeVisible();
    expect(academicExperienceThree).toBeVisible();
    expect(academicExperienceFour).toBeVisible();
    expect(academicExperienceFive).toBeVisible();
    expect(academicExperienceSix).toBeVisible();
  });
});
