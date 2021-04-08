import { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import AuthMiddleware from "../middlewares/AuthMiddleware";

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
        <Route path={LANDING} component={Landing}/>
        
        <AuthMiddleware>
          <Route exact path={HOME} component={Home}/>
        <Route path={REGISTER_SALE} component={RegisterSale} />
        </AuthMiddleware>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
