import { FC, useState } from "react";
import { useHistory } from "react-router";
import { LOGIN } from "../../../../router/routes";

// Components
import Input from "../../../../components/Input/Input";

// Styled components
import { PrimaryButton } from "../../../../styles/components/buttons";
import { TransparentLink } from "../../../../styles/components/links";
import { LoginForm } from "./style";
import { Flex } from "../../../../styles/components/layout";

// Icons
import { LogIn } from "react-feather";

// Services
import AccountService from "../../../../services/rest/AccountService";

const CreateAccount: FC = () => {
  const history = useHistory();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const accountService = new AccountService();
    const { status } = await accountService.createAccount({
      cpf,
      email,
      name,
      password,
    });

    if (status) {
      history.push(LOGIN);
    } else {
      alert(
        "Ocorreu um erro ao criar a conta. Por favor, revise os dados e tente novamente."
      );
    }
  }

  return (
    <>
      <h3>Criar nova conta</h3>

      <LoginForm onSubmit={handleSubmit}>
        <Input
          key="name"
          label="Nome completo"
          type="text"
          name="name"
          value={name}
          onSetValue={setName}
          required
        />
        <Input
          key="cpf"
          label="CPF"
          mask="999.999.999-99"
          type="text"
          name="cpf"
          value={cpf}
          onSetValue={setCpf}
          required
        />
        <Input
          key="email"
          label="E-mail"
          type="email"
          name="email"
          value={email}
          onSetValue={setEmail}
          required
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          key="password"
          value={password}
          onSetValue={setPassword}
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
    </>
  );
};

export default CreateAccount;
