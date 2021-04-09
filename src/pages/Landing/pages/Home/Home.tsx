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
      O Boticash é de um sistema online que tem como propósito 
      ajudar no acompanhamento de vendas e gestão de cashback para revendedores Boticário. 
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
