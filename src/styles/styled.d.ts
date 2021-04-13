import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      card: string;
      secundary: string;

      background: string;
      text: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }

  export interface CustomTheme {
    title: string;
    colors: {
      primary: string;
      card: string;
      secundary: string;

      background: string;
      text: string;
    };
  }
}
