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

const disapearAnimation = css`
  animation: ${disapear} 1s;
  animation-fill-mode: forwards;
`;

export const CenterDiv = styled.div`
  max-width: 1366px;
  width: 100%;
  padding-top: 66px;

  ${props => props.isNotifHidden && disapearAnimation}
`;
