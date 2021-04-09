import { useState, useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { loadUser } from "../redux/actions/user";

// Routes
import { LANDING } from "../router/routes";

const AuthMiddleware: FC = ({ children }) => {
  const history = useHistory();
  const [authorizated, setAuthorizated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      history.push(LANDING);
    } else {
      setAuthorizated(true);
      loadUserInfo();
    }
    // eslint-disable-next-line
  }, []);

  function loadUserInfo() {
    // Here you would have a connection to the backend to get the name and email data of the logged in user 
    dispatch(
      loadUser({ email: "lucasnobrega.js@email.com", name: "Lucas Nóbrega" })
    );
  }

  return authorizated ? <>{children}</> : <>Carregando</>;
};

export default AuthMiddleware;
