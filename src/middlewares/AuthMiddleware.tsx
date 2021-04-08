import { useState, useEffect, FC } from "react";
import { useHistory } from "react-router";

// Routes
import { LANDING } from "../router/routes";

const AuthMiddleware: FC = ({ children }) => {
  const history = useHistory();
  const [authorizated, setAuthorizated] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      history.push(LANDING);
    } else {
      setAuthorizated(true);
    }
    // eslint-disable-next-line
  }, []);

  return authorizated ? <>{children}</> : <>Carregando</>;
};

export default AuthMiddleware;
