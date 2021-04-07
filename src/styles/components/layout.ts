import styled from "styled-components";
import { MD } from "../../util/mediaBreakpoints";

export const FullPage = styled.div`
  margin-left: 97px;
  width: calc(100% - 97px);
  height: 100%;
  max-width: 100vw;
  min-height: 100vh;
  padding: 39px;

  @media (max-width: ${MD}px) {
    & {
      margin-left: 0;
      width: 100%;
    }
  }
`;

export const PageContent = styled.div`
  width: 100%;
  max-width: 1029px;
  margin: 0 auto;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: ${MD}) {
    & > {
      flex-direction: column;
    }
  }
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
  gap: 15px;
`;
