import { FC, useEffect } from "react";

//Images
import landingPageArt from "../../assets/imgs/landing_page_art.svg";

// Components
import { LogIn } from "react-feather";

import {
  Page,
  FlexColumn,
  ContentArea,
  PageContent,
  ArtArea
} from "./style";

import {
  PrimaryButton,
  TransparentButton,
} from "../../styles/components/buttons";

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
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </h3>

          <FlexColumn>
            <PrimaryButton>Criar nova conta</PrimaryButton>
            <TransparentButton>
              Fazer login
              <LogIn size="18" />
            </TransparentButton>
          </FlexColumn>
        </ContentArea>
        <ArtArea>
          <img src={landingPageArt} alt="Ilustração Boticash"/>
        </ArtArea>
      </PageContent>
    </Page>
  );
};

export default Landing;
