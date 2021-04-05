import styled from "styled-components";
import {
  PageContent as DefaultPageContent,
  FullPage,
} from "../../styles/components/layout";
import * as mediaBreakpoints from "../../util/mediaBreakpoints";

export const Page = styled(FullPage)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const PageContent = styled(DefaultPageContent)`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: ${mediaBreakpoints.LG}px) {
    & {
      flex-direction: column-reverse;
      text-align: center;
    }
  }
`;

export const ContentArea = styled.div`
  width: 100%;

  & > h1 {
    margin-bottom: 18px;
  }

  & > h3 {
    margin-bottom: 46px;
    text-align: justify;
  }

  @media (max-width: ${mediaBreakpoints.LG}px) {
    & > h3 {
      text-align: center;
    }
  }
`;

export const ArtArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & > img {
    width: 100%;
    max-width: 438px;
  }

  @media (max-width: ${mediaBreakpoints.LG}px) {
    & {
      margin-top: 50px;
      justify-content: center;
    }

    & > img {
      max-width: 150px;
    }
  }
`;
