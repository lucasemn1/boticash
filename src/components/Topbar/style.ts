import styled from "styled-components";
import { TransparentButton } from "../../styles/components/buttons";

export const FullPage = styled.div`
  height: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 66px;
`;

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
`;

export const BackButton = styled(TransparentButton)`
  width: 30px;
  margin-right: 15px;
`;
