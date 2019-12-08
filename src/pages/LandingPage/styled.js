import styled from "styled-components";
import { keyframes, css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const disapear = keyframes`
  0% {
    padding-top: 66px;
  }

  100% {
    padding-top: 0px;
  }
`;

const disapear425 = keyframes`
  0% {
    padding-top: 123px;
  }

  100% {
    padding-top: 0px;
  }
`;

const disapear375 = keyframes`
  0% {
    padding-top: 142px;
  }

  100% {
    padding-top: 0px;
  }
`;

const disapearAnimation = css`
  animation: ${disapear} 1s;
  animation-fill-mode: forwards;
  @media (max-width: 425px) {
    animation: ${disapear425} 1s;
    animation-fill-mode: forwards;
  }
  @media (max-width: 375px) {
    animation: ${disapear375} 1s;
    animation-fill-mode: forwards;
  }
`;

export const CenterDiv = styled.div`
  max-width: 1366px;
  width: 100%;
  padding-top: 66px;
  z-index: 0;
  ${props => props.isNotifHidden && disapearAnimation}
  @media (max-width: 425px) {
    padding-top: 123px;
  }
  @media (max-width: 375px) {
    padding-top: 142px;
  }
`;
