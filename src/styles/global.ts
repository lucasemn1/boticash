import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${props => props.theme.colors.getBackgroundColor()};
    color: ${props => props.theme.colors.getBackgroundContrastColor()};
  }
`;