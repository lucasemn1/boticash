// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Pages and styles
import Landing from "./pages/Landing/Landing";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle/>
        <Landing />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
