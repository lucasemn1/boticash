import { Link } from "react-router-dom";
import styled from "styled-components";

export const PrimaryLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const TransparentLink = styled(Link)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.getBackgroundContrastColor()};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
