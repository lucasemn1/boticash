import styled from "styled-components";
import {
  FlexColumn as DefaultFlexColumn
} from "../../../../styles/components/layout";

export const LoginForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 23px;
`;

export const FlexColumn = styled(DefaultFlexColumn)`
  margin-top: 16px;
`;
