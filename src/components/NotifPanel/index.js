import React from "react";
import {
  Wrapper,
  ContentContainer,
  TextContainer,
  NotifPanelButton,
  PanelButtonText
} from "./styled";

const NotifPanel = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <TextContainer>
          By accessing and using this website, you acknowledge that you have
          read and understand our Cookie Policy, Privacy Policy, and our Terms
          of Service.
        </TextContainer>
        <NotifPanelButton>
          <PanelButtonText>Got it</PanelButtonText>
        </NotifPanelButton>
      </ContentContainer>
    </Wrapper>
  );
};

export default NotifPanel;
