import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 11px;
`;

export const InputBox = styled.div`
  height: 47px;
  background-color: ${({ theme }) => theme.colors.getBackgroundColor2()};
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.getBorderColor()};
  display: flex;
`;

export const InputField = styled.input`
  padding: 0 5px 0 23px;
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