import { screen } from "@testing-library/react";
import renderWithTheme from "../../utils/tests/renderWithTheme";
import Skill from "./Skill";

describe("skill", () => {
  it("should render the skill name", () => {
    renderWithTheme(
      <Skill
        name="development"
        percentage={70}
        barColor="red"
        barBgColor="gray"
      />
    );
    const name = screen.getByText(/Development/i);
    expect(name).toBeVisible();
  });
});
