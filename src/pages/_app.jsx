import { ModalProvider } from "../contexts/ModalContext";
import { DataProvider } from "../contexts/DataContext";
import styled, { ThemeProvider } from "styled-components";
import { combineTheme, dark, light } from "../styles/themes";

import GlobalStyle from "../styles/global";
import { useState } from "react";

const Button = styled.button`
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  margin-left: 3rem;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};

  @media (max-width: 540px) {
    margin-left: 2.1rem;
  }

  @media (max-width: 280px) {
    margin-left: 1.4rem;
  }
`;

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(combineTheme(light));

  const toggleTheme = () => {
    setTheme(
      theme.title === "light" ? combineTheme(dark) : combineTheme(light)
    );
  };

  return (
    <DataProvider>
      <ModalProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <Component {...pageProps} />
          <Button
            onClick={toggleTheme}
            style={{ position: "fixed", bottom: "3%", left: "0" }}
          >
            Mudar tema
          </Button>
        </ThemeProvider>
      </ModalProvider>
    </DataProvider>
  );
}

export default MyApp;
