import { FC } from "react";
import { useHistory } from "react-router";
import { CREATE_ACCOUNT, HOME } from "../../../../router/routes";

// Components
import Input from '../../../../components/Input/Input';

// Styled components
import { PrimaryButton } from "../../../../styles/components/buttons";
import { TransparentLink } from "../../../../styles/components/links";
import { LoginForm, FlexColumn } from "./style";

// Icons
import { AtSign, Key, LogIn } from "react-feather";

const Login: FC = () => {
  const history = useHistory();

  function goToHome() {
    history.push(HOME);
  }

  return (
    <>
      <h3>Fazer login</h3>

      <LoginForm>
        <Input
          label="Email"
          type="email"
          name="email"
          required
        >
          <AtSign size="18" />
        </Input>
        <Input
          label="Senha"
          type="password"
          name="password"
          required
        >
          <Key size="18" />
        </Input>

        <FlexColumn>
          <PrimaryButton onClick={goToHome}>
            Fazer login
            <LogIn size="18" />
          </PrimaryButton>
          <TransparentLink to={CREATE_ACCOUNT}>Criar nova conta</TransparentLink>
        </FlexColumn>
      </LoginForm>
    </>
  );
}

export default Login;
