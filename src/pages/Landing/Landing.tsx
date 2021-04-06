import { FC, useEffect } from "react";

//Images
import landingPageArt from "../../assets/imgs/landing_page_art.svg";

// Components
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import CreateAccount from "./pages/CreateAccount/CreateAccount";

// Styled components
import { Page, ContentArea, PageContent, ArtArea } from "./style";

// Router
import { Switch, Route } from "react-router-dom";
import { CREATE_ACCOUNT, LANDING, LOGIN } from "../../router/routes";

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

          <Switch>
            <Route exact path={LANDING} component={Home} />
            <Route exact path={LOGIN} component={Login} />
            <Route exact path={CREATE_ACCOUNT} component={CreateAccount} />
          </Switch>
        </ContentArea>
        <ArtArea>
          <img src={landingPageArt} alt="Ilustração Boticash" />
        </ArtArea>
      </PageContent>
    </Page>
  );
};

export default Landing;
