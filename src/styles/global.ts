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

  h1, h2, h3, h4, h5, h6, p {
    font-weight: lighter;
  }

  h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 35px;
  }

  h3 {
    font-size: 22px;
  }

  p {
    font-size: 15px;
  }
`;