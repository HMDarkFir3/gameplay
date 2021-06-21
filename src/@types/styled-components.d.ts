import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      text: string;
    };
  }

  export interface CustomTheme {
    title: string;

    colors: {
      background: string;
      text: string;
    };
  }
}
