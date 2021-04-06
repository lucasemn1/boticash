import { FC } from "react";
import ProfileButton from "../ProfileButton/ProfileButton";

import {
  FullPage
} from "./style";

const Topbar: FC = () => {
  return (
    <FullPage>
      <h3>Boticash / Início</h3>

      <ProfileButton />
    </FullPage>
  );
}

export default Topbar;
