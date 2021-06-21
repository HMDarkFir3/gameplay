import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      red: string;
      redLine: string;

      text: string;
      textButton: string;
    };
  }
}
