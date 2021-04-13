import { ModalProvider } from "../contexts/ModalContext";
import { DataProvider } from "../contexts/DataContext";
import styled, { ThemeProvider } from "styled-components";
import { combineTheme, dark, light } from "../styles/themes";

import GlobalStyle from "../styles/global";
import { useState } from "react";

const Button = styled.button`
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.colors.text};
  background: transparent;
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
          <Button
            onClick={toggleTheme}
            style={{ position: "fixed", bottom: "5%", left: "5%" }}
          >
            Mudar tema
          </Button>
          <Component {...pageProps} />
        </ThemeProvider>
      </ModalProvider>
    </DataProvider>
  );
}

export default MyApp;
