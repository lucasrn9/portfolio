import { screen } from "@testing-library/react";
import renderWithTheme from "../../utils/tests/renderWithTheme";
import Skill from "./Skill";

describe("skill", () => {
  it("should render the skill name and percentage", () => {
    renderWithTheme(
      <Skill
        name="development"
        percentage={70}
        barColor="red"
        barBgColor="gray"
      />
    );
    const name = screen.getByText(/Development/i);
    const percentage = screen.getByText(/70%/i);
    expect(name).toBeVisible();
    expect(percentage).toBeVisible();
  });
});
