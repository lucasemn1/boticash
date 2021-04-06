import styled from "styled-components";
import { MD } from "../../util/mediaBreakpoints";

export const ProfileButtonArea = styled.div`
  position: relative;
  cursor: pointer;
`;

export const ProfileInfoArea = styled.button`
  background: transparent;
  padding: 0 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 154px;
  height: 28px;

  & svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${MD}px) {
    & {
      width: min-content;
    }
    
    & > h4 {
      display: none;
    }
  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: calc(100% + 10px);
  min-width: 100px;
  right: 0;
  width: 100%;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.getBackgroundColor2()};
  border: 1px solid ${({ theme }) => theme.colors.getBorderColor()};
  box-shadow: 0 10px 10px ${({ theme }) => {
    const rgbColor = theme.colors.getBackgroundContrastColor();
    return rgbColor.replace(")", ", 0.02)");
  }};
  list-style: none;

  & > li > button {
    background: transparent;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    width: 100%;
    text-align: left;
    font-size: 14px;

    & > svg {
      color: ${({ theme }) => theme.colors.getBackgroundContrastColor()};
    }
  }
`;
