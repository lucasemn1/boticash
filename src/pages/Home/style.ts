import styled from "styled-components";
import {
  FullPage as DefaultFullPage,
  PageContent as DefaultPageContent,
} from "../../styles/components/layout";
import { PrimaryButton as DefaultPrimaryButton } from "../../styles/components/buttons";

// Breakpoints
import { MD, XL } from "../../util/mediaBreakpoints";

export const FullPage = styled(DefaultFullPage)``;

export const PageContent = styled(DefaultPageContent)`
  margin: 0 auto;
`;

export const AmountIndicatorLine = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: ${MD}px) {
    & {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const AmountIndicatorArea = styled.div`
  display: grid;
  grid-template-columns: 89px 1fr;
  gap: 45px;
  width: 334px;

  & img {
    width: 100%;
  }

  & h1 {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: ${MD}px) {
    & {
      grid-template-columns: 1fr;
      justify-content: center;
    }

    & img {
      width: 136px;
    }

    & > div {
      align-items: center;
    }
  }
`;

export const PrimaryButton = styled(DefaultPrimaryButton)`
  @media (min-width: ${MD}px) {
    & {
      width: 223px;
    }
  }
`;

export const SearchArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 305px;
  gap: 46px;
  margin-top: 73px;

  @media (max-width: ${MD}px) {
    & {
      grid-template-columns: 1fr;
      gap: 18px;
    }
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin-top: 52px;

  @media (max-width: ${XL}px) {
    & {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${MD - 1}px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;
