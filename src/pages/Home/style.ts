import styled from "styled-components";
import {
  FullPage as DefaultFullPage,
  PageContent as DefaultPageContent
} from "../../styles/components/layout";

export const FullPage = styled(DefaultFullPage)`
  padding: 0;
  display: grid;
  grid-template-columns: 97px 1fr;

  & > div:last-child {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const PageContent = styled(DefaultPageContent)``;
