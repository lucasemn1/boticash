import styled from "styled-components";
import { MD } from "../../util/mediaBreakpoints";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 163px;
  row-gap: 26px;
  column-gap: 44px;
  align-items: center;
  width: 100%;
  max-width: 622px;

  & > img {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;
    width: 100%;
  }

  & > .input-box:nth-child(2) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
  }

  & > .input-box:nth-child(3) {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
  }

  & > .input-box:nth-child(4) {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 3;
  }

  & > button {
    margin-top: 10px;
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 1;
    grid-column-end: 3;
  }

  @media (max-width: ${MD}px) {
    & {
      grid-template-columns: 1fr;
    }

    & > img {
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 1;
      grid-column-end: 2;
      width: 163PX;
      margin: 0 auto;
    }

    & > .input-box:nth-child(2) {
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 2;
    }

    & > .input-box:nth-child(3) {
      grid-row-start: 3;
      grid-row-end: 4;
      grid-column-start: 1;
      grid-column-end: 2;
    }

    & > .input-box:nth-child(4) {
      grid-row-start: 4;
      grid-row-end: 5;
      grid-column-start: 1;
      grid-column-end: 2;
    }

    & > button {
      margin-top: 10px;
      grid-row-start: 5;
      grid-row-end: 6;
      grid-column-start: 1;
      grid-column-end: 2;
    }
  }
`;
