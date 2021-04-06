import { FC, useState } from "react";
import { LogOut, User } from "react-feather";
import { useHistory } from "react-router";
import { LANDING } from "../../router/routes";
import { Dropdown, ProfileButtonArea, ProfileInfoArea } from "./style";

const ProfileButton: FC = () => {
  const history = useHistory();

  // States
  const [showMenuOptions, setShowMenuOptions] = useState(false);

  function logout() {
    history.push(LANDING);
  }

  return (
    <ProfileButtonArea>
      <ProfileInfoArea onClick={() => setShowMenuOptions(!showMenuOptions)}>
        <h4>Lucas Emanuel</h4>
        <User size="20" />
      </ProfileInfoArea>

      {showMenuOptions && (
        <Dropdown>
          <li>
            <button onClick={logout}>
              Sair
              <LogOut size="12" />
            </button>
          </li>
        </Dropdown>
      )}
    </ProfileButtonArea>
  );
}

export default ProfileButton;
