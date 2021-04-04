

export interface ITheme {
  title: string;
  colors: {
    primary: string;
    primaryHover: string;
    secondary: string;
    secondaryHover: string;
    danger: string;
    dark: string;
    dark2: string;
    dark3: string;
    light: string;
    light2: string;
    light3: string;
    light4: string;
    getBackgroundColor: () => string;
    getBackgroundColor2: () => string;
    getBackgroundContrastColor: () => string;
    getBackgroundContrastColor2: () => string;
    getBorderColor: () => string;
  },
}

export const lightTheme: ITheme = {
  title: "light",
  colors: {
    primary: "rgb(141, 198, 63)",
    primaryHover: "rgb(75, 116, 20)",
    secondary: "rgb(245, 130, 32)",
    secondaryHover: "rgb(241, 90, 34)",
    danger: "rgb(241, 71, 34)",
    dark: "rgb(44, 44, 44)",
    dark2: "rgb(116, 116, 116)",
    dark3: "rgb(190, 190, 190)",
    light: "rgb(255, 255, 255)",
    light2: "rgb(252, 252, 252)",
    light3: "rgb(244, 244, 244)",
    light4: "rgb(228, 228, 228)",

    getBackgroundColor() {
      return this.light3;
    },

    getBackgroundColor2() {
      return this.light;
    },

    getBackgroundContrastColor() {
      return this.dark;
    },

    getBackgroundContrastColor2() {
      return this.light2;
    },

    getBorderColor() {
      return this.light4;
    }
  }
} 