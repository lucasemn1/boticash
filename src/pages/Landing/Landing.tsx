import { FC, useEffect } from "react";

const Landing: FC = () => {
  // onMounted
  useEffect(() => {
    document.title = "Boticash | Crie uma nova conta ou faça login.";
  }, []);

  return (
    <h1>Landing Page</h1>
  );
}

export default Landing;
