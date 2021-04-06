import styled from "styled-components";

export const ExpectedValue = styled.h1`
  text-align: center;
  font-weight: bold;
`;

export const StatusIndicator = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  height: 30px;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.getBackgroundColor()};

  & .approved {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  & .in-progress {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  & .disapproved {
    background-color: ${({ theme }) => theme.colors.danger};
  }
`;

export const CardContainer = styled.div`
  width: 330px;
  height: 309px;
  background-color: ${({ theme }) => theme.colors.getBackgroundColor2()};
  padding: 41px;
  border-radius: 20px;
  box-shadow: 0px 10px 25px rgba(104, 113, 92, 0.04);

  &.approved {
    & ${ExpectedValue} {
      color: ${({ theme }) => theme.colors.primary};
    }

    & ${StatusIndicator} {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  &.in-progress {
    & ${ExpectedValue} {
      color: ${({ theme }) => theme.colors.secondary};
    }

    & ${StatusIndicator} {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  &.disapproved {
    & ${ExpectedValue} {
      color: ${({ theme }) => theme.colors.danger};
    }

    & ${StatusIndicator} {
      background-color: ${({ theme }) => theme.colors.danger};
    }
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 26px;
  column-gap: 10px;
  margin-top: 24px;
  margin-bottom: 10px;

  & > div {
    width: 100%;

    & > h2 {
      font-size: 17px;
      margin-top: 4px;
      text-align: center;
      font-weight: normal;
    }

    & > h3 {
      font-size: 12px;
      text-align: center;
      font-weight: normal;
    }
  }
`;
