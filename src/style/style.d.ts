import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      dnd_blue: string;
      dnd_skyblue: string;
    };
    fonts: {
      dnd_h1: string;
    };
  }
}
