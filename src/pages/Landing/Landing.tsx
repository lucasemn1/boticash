import { FC, useEffect, useState } from "react";

// Components
import Input from "../../components/Input/Input";
import { AtSign } from "react-feather";

const Landing: FC = () => {
  const [email, setEmail] = useState<string>("");

  // onMounted
  useEffect(() => {
    document.title = "Boticash | Crie uma nova conta ou faça login.";
  }, []);

  return (
    <>
      <h1>Hello Landing page</h1>
      <Input
        label="E-mail"
        type="email"
        name="email"
        value={email}
        onSetValue={setEmail}
      >
        <AtSign size="18" />
      </Input>

      <Input
        label="E-mail"
        type="email"
        name="email"
        value={email}
        onSetValue={setEmail}
      >
        <AtSign size="18" />
      </Input>
    </>
  );
};

export default Landing;
