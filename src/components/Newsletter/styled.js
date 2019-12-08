import styled from "styled-components";
import { keyframes, css } from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  width: 100%;
`;

export const CenterDiv = styled.div`
  width: 100%;
  max-width: 1366px;
`;

const disapear = keyframes`
  0% {
    bottom: 0;
  }

  100% {
    bottom: -170px;
  }
`;

const disapearAnimation = css`
  animation: ${disapear} 1s;
  animation-fill-mode: forwards;
`;

export const NewsletterCard = styled.div`
  margin: 0;
  background-color: rgb(0, 123, 193, 0.9);
  display: inline-block;
  padding: 20px;
  max-width: 640px;
  position: relative;
  ${props => props.isHidden && disapearAnimation}
`;

export const NewsletterTitle = styled.div`
  font-size: 25px;
  color: #ffffff;
  margin-top: 10px;
`;

export const NewsletterDesc = styled.div`
  color: #ffffff;
  margin-top: 10px;
  font-size: 14px;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  color: #ffffff;
  font-size: 12px;
  cursor: pointer;
`;

export const FormWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputEmail = styled.input`
  width: 100%;
  margin-right: 10px;
  border: none;
  height: 20px;
  box-sizing: border-box;
`;

export const SubscribeButton = styled.div`
  border-radius: 3px;
  background-color: #ff8000;
  white-space: nowrap;
  font-size: 12px;
  padding: 3px 10px;
  color: white;
  cursor: pointer;
`;
