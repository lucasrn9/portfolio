/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { screen } from "@testing-library/react";
import renderWithTheme from "../../utils/tests/renderWithTheme";
import AcademicSection from "./AcademicSection";
import CertificationsSection from "../certificationsSection/CertificationsSection";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("AcademicSection", () => {
  it("should render the academic section title", () => {
    renderWithTheme(<AcademicSection />);
    const sectionTitle = screen.getByRole("heading", { name: "Academic" });
    expect(sectionTitle).toBeVisible();
  });
  it("should render the courses and certificates section title", () => {
    renderWithTheme(<CertificationsSection />);
    const sectionTitle = screen.getByRole("heading", {
      name: "Courses and Certificates",
    });
    expect(sectionTitle).toBeVisible();
  });
  it("should render 3 academic experiences", () => {
    renderWithTheme(<AcademicSection />);
    const academicExperienceOne = screen.getByText(
      "Technologist in Informatics for Business - FATEC SBC"
    );
    const academicExperienceTwo = screen.getByText("English - Alt Idiomas");
    const academicExperienceThree = screen.getByText("Systems Analysis and Development - International University Center - Uninter");

    expect(academicExperienceOne).toBeVisible();
    expect(academicExperienceTwo).toBeVisible();
    expect(academicExperienceThree).toBeVisible();
  });
  it("should render 6 courses and certificates", () => {
    renderWithTheme(<CertificationsSection />);

    const certificateOne = screen.getByText(
      "Bootcamp MRV Front End - Digital Innovation One"
    );
    const certificateTwo = screen.getByText(
      "Oracle One Front End - Oracle & Alura"
    );
    const certificateThree = screen.getByText(
      "Google Cybersecurity Certificate - Google & Coursera"
    );
    const certificateFour = screen.getByText(
      "Oracle Certified Foundations Associate - Oracle"
    );
    const certificateFive = screen.getByText(
      "Hackers do Bem Red Team - SENAI & RNP"
    );
    const certificateSix = screen.getByText(
      "CS50x & CS50 Cybersecurity - Harvard University"
    );

    expect(certificateOne).toBeVisible();
    expect(certificateTwo).toBeVisible();
    expect(certificateThree).toBeVisible();
    expect(certificateFour).toBeVisible();
    expect(certificateFive).toBeVisible();
    expect(certificateSix).toBeVisible();
  });
});
