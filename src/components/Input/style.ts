import styled from "styled-components";
import InputMask from "react-input-mask";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  text-align: left;
  margin-bottom: 11px;
`;

export const InputBox = styled.div`
  height: 47px;
  background-color: ${({ theme }) => theme.colors.getBackgroundColor2()};
  border: 1px solid ${({ theme }) => theme.colors.getBorderColor()};
  display: flex;
`;

export const InputField = styled.input`
  /* appearance: none; */
  padding: 0 5px 0 23px;
  font-size: 16px;
  height: 100%;
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.getBackgroundColor2()};
  appearance: none;

  &[type=date]::-webkit-calendar-picker-indicator {
    margin-right: 10px;
  }
`;

export const InputMaskedField = styled(InputMask)`
  padding: 0 5px 0 23px;
  font-size: 16px;
  height: 100%;
  width: 100%;
  border: none;
`;

export const InputIconBox = styled.div`
  padding: 0 18px 0 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
