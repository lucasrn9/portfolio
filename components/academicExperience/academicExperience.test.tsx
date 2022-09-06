import { screen } from "@testing-library/react";
import renderWithTheme from "../../utils/tests/renderWithTheme";
import AcademicExperience from "./AcademicExperience";

describe("AcademicExperience", () => {
  it("should render the experience information", () => {
    renderWithTheme(
      <AcademicExperience
        title="test degree"
        description="test description"
        startYear="2019"
        conclusionYear="2020"
      />
    );
    const title = screen.getByRole("heading", { name: "test degree" });
    const description = screen.getByText("test description");
    const startYear = screen.getByText(/2019/);
    const finishYear = screen.getByText(/2020/);
    expect(title).toBeVisible();
    expect(description).toBeVisible();
    expect(startYear).toBeVisible();
    expect(finishYear).toBeVisible();
  });

  it("should render uncompleted after the start and finish year if the prop uncompleted is true", () => {
    renderWithTheme(
      <AcademicExperience
        title="test degree"
        description="test description"
        startYear="2019"
        conclusionYear="2020"
        uncompleted
      />
    );
    const title = screen.getByRole("heading", { name: "test degree" });
    const description = screen.getByText("test description");
    const startYear = screen.getByText(/2019/);
    const finishYear = screen.getByText(/2020/);
    const uncompleted = screen.getByText(/uncompleted/);
    expect(title).toBeVisible();
    expect(description).toBeVisible();
    expect(startYear).toBeVisible();
    expect(finishYear).toBeVisible();
    expect(uncompleted).toBeVisible();
  });
});
