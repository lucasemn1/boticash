import { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Routes
import { HOME, LANDING, REGISTER_SALE } from "./routes";

// Pages
import Landing from "../pages/Landing/Landing";
import Home from "../pages/Home/Home";
import RegisterSale from "../pages/RegisterSale/RegisterSale";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME} component={Home}/>
        <Route path={LANDING} component={Landing}/>
        <Route path={REGISTER_SALE} component={RegisterSale} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
