import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export const ContentContainer = styled.div`
  max-width: 720px;
  display: flex;
`;

export const TextContainer = styled.div`
  text-align: left;
  font-size: 16px;
  color: #868686;
`;

export const NotifPanelButton = styled.div`
  padding: 2px 12px;
  white-space: nowrap;
  background-color: #007bc1;
  display: flex;
  border-radius: 3px;
  margin-left: 17px;
  cursor: pointer;
`;

export const PanelButtonText = styled.div`
  align-self: center;
  color: #ffffff;
`;

export const NotifPanelLink = styled.a`
  text-decoration: none;
`;
