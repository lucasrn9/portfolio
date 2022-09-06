/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
import { screen, render } from "@testing-library/react";
import SectionTitle from "./SectionTitle";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("SectionTitle", () => {
  it("should render the section title", () => {
    render(<SectionTitle>Test</SectionTitle>);
    const title = screen.getByText(/Test/i);
    const backgroundImage = screen.queryByAltText("dots background");
    expect(title).toBeVisible();
    expect(backgroundImage).toBeVisible();
  });
  it("should not render the dots background when disableBg prop is equal to true", () => {
    render(<SectionTitle disableBg>Test</SectionTitle>);
    const title = screen.getByText(/Test/i);
    const backgroundImage = screen.queryByAltText("dots background");
    expect(title).toBeVisible();
    expect(backgroundImage).toBeNull();
  });
});
