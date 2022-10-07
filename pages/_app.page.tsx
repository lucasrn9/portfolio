/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/global";
import light from "../theme/light";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={light}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
