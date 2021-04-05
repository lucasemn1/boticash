import { FC } from "react";

// Components
import Input from '../../../../components/Input/Input';

// Styled components
import { PrimaryButton } from "../../../../styles/components/buttons";
import { TransparentLink } from "../../../../styles/components/links";
import { LoginForm, FlexColumn } from "./style";

// Icons
import { AtSign, Key, LogIn } from "react-feather";

const Login: FC = () => {
  return <>
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
        <PrimaryButton>
          Fazer login
          <LogIn size="18" />
        </PrimaryButton>
        <TransparentLink to="/nova-conta">Criar nova conta</TransparentLink>
      </FlexColumn>
    </LoginForm>
  </>;
}

export default Login;
