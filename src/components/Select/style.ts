import styled from "styled-components";
import ArrowDown from "../../assets/icons/arrow-down.svg";

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

export const Label = styled.label`
  min-width: 69px;
  font-size: 16px;
`;

export const SelectField = styled.select`
  appearance: none;
  padding: 0 5px 0 23px;
  height: 47px;
  width: 100%;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.getBorderColor()};
  background-color: ${({ theme }) => theme.colors.getBackgroundColor2()};
  background-image: url(${ArrowDown});
  background-repeat: no-repeat;
  background-size: 10px;
  background-position: calc(100% - 23px);
`;
