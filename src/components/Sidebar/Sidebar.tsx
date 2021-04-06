import { FC } from "react";

// Styled components
import {
  SidebarContainer, 
  Logo
} from "./style";

const Sidebar: FC = () => {
  return (
    <SidebarContainer>
      <Logo src="/logo192.png" alt="Logo reduzido do Boticash" />
    </SidebarContainer>
  );
}

export default Sidebar;
