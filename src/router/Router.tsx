import { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HOME, LANDING } from "./routes";
import Landing from "../pages/Landing/Landing";
import Home from "../pages/Home/Home";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME} component={Home}/>
        <Route path={LANDING} component={Landing}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
