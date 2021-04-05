import styled from "styled-components";

export const PrimaryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const TransparentButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.getBackgroundContrastColor()};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
