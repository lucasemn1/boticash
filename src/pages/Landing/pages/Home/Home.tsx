import { FC } from "react";
import { CREATE_ACCOUNT, LOGIN } from "../../../../router/routes";

// Styled components
import { FlexColumn } from "../../../../styles/components/layout";
import { PrimaryLink, TransparentLink } from "../../../../styles/components/links";

// Icons
import { LogIn } from "react-feather";

const Home: FC = () => {
  return <>
    <h3>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    </h3>

    <FlexColumn>
      <PrimaryLink to={CREATE_ACCOUNT}>Criar nova conta</PrimaryLink>
      <TransparentLink to={LOGIN}>
        Fazer login
        <LogIn size="18" />
      </TransparentLink>
    </FlexColumn>
  </>;
}

export default Home;
