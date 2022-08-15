import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { JSXElementConstructor, ReactElement } from "react";
import light from "../../theme/light";
import GlobalStyle from "../../theme/global";

const renderWithTheme = (
  component: ReactElement<any, string | JSXElementConstructor<any>>
) => {
  render(
    <ThemeProvider theme={light}>
      <GlobalStyle />
      {component}
    </ThemeProvider>
  );
};

export default renderWithTheme;
