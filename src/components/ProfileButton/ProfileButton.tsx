import { FC, useState } from "react";
import { useHistory } from "react-router";

// Routes
import { LANDING } from "../../router/routes";

// Styled components
import { Dropdown, ProfileButtonArea, ProfileInfoArea } from "./style";

// Icons
import { LogOut, User } from "react-feather";

const ProfileButton: FC = () => {
  const history = useHistory();
  
  const [showMenuOptions, setShowMenuOptions] = useState(false);

  function logout() {
    localStorage.removeItem("accessToken");
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
};

export default ProfileButton;
