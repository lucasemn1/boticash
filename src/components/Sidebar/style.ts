import styled from "styled-components";

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 97px;
  background-color: ${({ theme }) => theme.colors.getBackgroundColor2()};
  padding: 35px 12px;
`;

export const Logo = styled.img`
  width: 100%;
`;