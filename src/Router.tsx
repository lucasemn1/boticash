import { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
