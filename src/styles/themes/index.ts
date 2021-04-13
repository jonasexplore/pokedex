import { DefaultTheme, CustomTheme } from "styled-components";
import dark from "./dark";
import light from "./light";

const defaultTheme = {
  fontSizes: {
    small: "16px",
    medium: "18px",
    large: "20px",
  },
};

function combineTheme(theme: CustomTheme): DefaultTheme {
  return { ...defaultTheme, ...theme };
}

export { combineTheme, dark, light };
