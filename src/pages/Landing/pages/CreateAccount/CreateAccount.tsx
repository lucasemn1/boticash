import { FC } from "react";

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
        required
      />
      <Input
        label="CPF"
        mask="999.999.999-99"
        type="text"
        name="cpf"
        required
      />
      <Input
        label="E-mail"
        type="email"
        name="email"
        required
      />
      <Input
        label="Senha"
        type="password"
        name="password"
        required
      />

      <Flex>
        <TransparentLink to="/login">
          Fazer login
          <LogIn size="18" />
        </TransparentLink>
        <PrimaryButton>Criar nova conta</PrimaryButton>
      </Flex>
    </LoginForm>
  </>;
}

export default CreateAccount;
