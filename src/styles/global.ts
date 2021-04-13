import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --white: #fff;
      --background: #e5e5e5;
      --gray-line: #7d7e80;
      --text: #666;
      --text-highlight: #b2b9ff;
      --title: #2e384d;
      --black: #343232;
      --red: #e83f5b;
      --green: #4cd62b;
      --blue: #5965e0;
      --blue-dark: #4953b8;
      --blue-twitter: #2aa9e0;
      --yellow: #ffcb05;
    }

    @media (max-width: 1080px) {
      html {
        font-size: 93.75%;
      }
    }

    @media (max-width: 720px) {
      html {
        font-size: 87.5%;
      }
    }

    body {
      /* background: rgb(245, 247, 250);
      color: var(--text); */
      background: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.text};
    }

    body,
    input,
    textarea,
    button {
      font: 400 1rem "Poppins", sans-serif;
    }

    button {
      cursor: pointer;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
`;
