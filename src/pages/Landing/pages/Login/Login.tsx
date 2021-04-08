import { FC, useState } from "react";
import { useHistory } from "react-router";
import { CREATE_ACCOUNT, HOME } from "../../../../router/routes";

// Components
import Input from "../../../../components/Input/Input";

// Styled components
import { PrimaryButton } from "../../../../styles/components/buttons";
import { TransparentLink } from "../../../../styles/components/links";
import { LoginForm, FlexColumn } from "./style";

// Icons
import { AtSign, Key, LogIn } from "react-feather";

// Services
// import LoginService from "../../../../services/rest/LoginService";

const Login: FC = () => {
  const history = useHistory();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // On a real project I would do similar to the code below.
    // As the fake API I am using does not have this feature, I am inserting a common string to go to the next page. 
    /*
    const loginService = new LoginService();
    const { status, data } = await loginService.getAccessToken({ email, password });

    if (status) {
      localStorage.setItem("accessToken", data);
      history.push(HOME);
    } else {
      alert(
        "Houve um erro ao fazer o login. Por favor, verifique suas credenciais e tente novamente."
      );
    }
    */

    localStorage.setItem("accessToken", "Value of the json web token ");
    history.push(HOME);
  }

  return (
    <>
      <h3>Fazer login</h3>

      <LoginForm onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          value={email}
          onSetValue={setEmail}
          required
        >
          <AtSign size="18" />  
        </Input>
        <Input
          label="Senha"
          type="password"
          name="password"
          value={password}
          onSetValue={setPassword}
          required
        >
          <Key size="18" />
        </Input>

        <FlexColumn>
          <PrimaryButton>
            Fazer login
            <LogIn size="18" />
          </PrimaryButton>
          <TransparentLink to={CREATE_ACCOUNT}>
            Criar nova conta
          </TransparentLink>
        </FlexColumn>
      </LoginForm>
    </>
  );
};

export default Login;
