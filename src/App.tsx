import { Provider } from "react-redux";
import Landing from "./pages/Landing/Landing";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

export default App;
