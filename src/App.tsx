// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Pages and styles
import Router from "./Router";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes";

function App() {
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
