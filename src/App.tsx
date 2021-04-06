// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Pages and styles
import Router from "./router/Router";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const appBar: any = document.querySelector('meta[name="theme-color"]');
    appBar.content = lightTheme.colors.light4;
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle/>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
