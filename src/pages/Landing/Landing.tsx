import { FC, useEffect } from "react";

//Images
import landingPageArt from "../../assets/imgs/landing_page_art.svg";

// Components
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import CreateAccount from "./pages/CreateAccount/CreateAccount";

// Styled components
import {
  Page,
  ContentArea,
  PageContent,
  ArtArea
} from "./style";

// Router components
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Landing: FC = () => {
  // onMounted
  useEffect(() => {
    document.title = "Boticash | Crie uma nova conta ou faça login.";
  }, []);

  return (
    <Page>
      <PageContent>
        <ContentArea>
          <h1>Boticash</h1>
          
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/nova-conta" exact component={CreateAccount} />
            </Switch>
          </BrowserRouter>
        </ContentArea>
        <ArtArea>
          <img src={landingPageArt} alt="Ilustração Boticash" />
        </ArtArea>
      </PageContent>
    </Page>
  );
};

export default Landing;
