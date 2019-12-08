import styled from "styled-components";
import { keyframes, css } from "styled-components";

export const CenterDiv = styled.div`
  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
  padding: 14px 0;
  width: 100%;
  max-width: 1366px;
`;

export const ContentContainer = styled.div`
  max-width: 720px;
  display: flex;
  text-align: center;
`;

export const TextContainer = styled.div`
  text-align: left;
  font-size: 16px;
  color: rgb(102, 102, 102);
`;

export const NotifPanelButton = styled.div`
  padding: 2px 12px;
  white-space: nowrap;
  background-color: #007bc1;
  display: flex;
  border-radius: 3px;
  margin-left: 25px;
  cursor: pointer;
`;

export const PanelButtonText = styled.div`
  align-self: center;
  color: #ffffff;
`;

export const NotifPanelLink = styled.a`
  text-decoration: none;
`;

const disapear = keyframes`
  0% {
    top: 0;
  }

  100% {
    top: -66px;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100vw;
  top: 0;
  ${props => props.isHidden && disapearAnimation}
`;

const disapearAnimation = css`
  animation: ${disapear} 1s;
  animation-fill-mode: forwards;
`;
