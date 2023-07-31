import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import ReactDOM from "react-dom/client";
import Home from "./templates/App";
import { GlobalStyle } from "./styles/global-styles";
import { styled, css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
  background: ${({ theme }) => theme.colors.primaryColor};
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container></Container>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
