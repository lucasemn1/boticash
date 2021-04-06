import styled from "styled-components";
import { MD } from "../../util/mediaBreakpoints";

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 97px;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.getBackgroundColor2()};
  padding: 35px 12px;
  position: fixed;
  z-index: 1;

  @media (max-width: ${MD}px) {
    & {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  width: 100%;
`;