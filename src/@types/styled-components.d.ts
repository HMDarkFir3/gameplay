import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;

      secondary100: string;
      secondary90: string;
      secondary80: string;
      secondary85: string;
      secondary70: string;
      secondary60: string;
      secondary50: string;
      secondary40: string;
      secondary30: string;

      overlay: string;
      highlight: string;
      heading: string;
      line: string;
      on: string;

      discord: string;
    };
  }
}
