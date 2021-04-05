import { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
