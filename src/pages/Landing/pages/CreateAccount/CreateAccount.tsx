import { FC } from "react";
import { LOGIN } from "../../../../router/routes";

// Components
import Input from '../../../../components/Input/Input';

// Styled components
import { PrimaryButton } from "../../../../styles/components/buttons";
import { TransparentLink } from "../../../../styles/components/links";
import { LoginForm } from "./style";
import { Flex } from "../../../../styles/components/layout";

// Icons
import { LogIn } from "react-feather";

const CreateAccount: FC = () => {
  return <>
    <h3>Criar nova conta</h3>

    <LoginForm>
      <Input
        label="Nome completo"
        type="text"
        name="name"
        key="name"
        required
      />
      <Input
        label="CPF"
        mask="999.999.999-99"
        type="text"
        name="cpf"
        key="cpf"
        required
      />
      <Input
        label="E-mail"
        type="email"
        name="email"
        key="email"
        required
      />
      <Input
        label="Senha"
        type="password"
        name="password"
        key="password"
        required
      />

      <Flex>
        <TransparentLink to={LOGIN}>
          Fazer login
          <LogIn size="18" />
        </TransparentLink>
        <PrimaryButton>Criar nova conta</PrimaryButton>
      </Flex>
    </LoginForm>
  </>;
}

export default CreateAccount;
