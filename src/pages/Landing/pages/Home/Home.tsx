import { FC } from "react";

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
      <PrimaryLink to="/nova-conta">Criar nova conta</PrimaryLink>
      <TransparentLink to="/login">
        Fazer login
        <LogIn size="18" />
      </TransparentLink>
    </FlexColumn>
  </>;
}

export default Home;
