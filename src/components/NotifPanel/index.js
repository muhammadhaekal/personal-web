import React from "react";
import {
  Wrapper,
  ContentContainer,
  TextContainer,
  NotifPanelButton,
  PanelButtonText,
  NotifPanelLink
} from "./styled";

const NotifPanel = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <TextContainer>
          By accessing and using this website, you acknowledge that you have
          read and understand our{" "}
          <NotifPanelLink href="https://www.cermati.com/pages/privacy-policy">
            Cookie Policy
          </NotifPanelLink>
          ,{" "}
          <NotifPanelLink href="https://www.cermati.com/pages/privacy-policys">
            Privacy Policy
          </NotifPanelLink>
          , and our{" "}
          <NotifPanelLink href="https://www.cermati.com/pages/privacy-policys">
            Terms of Service
          </NotifPanelLink>
          .
        </TextContainer>
        <NotifPanelButton>
          <PanelButtonText>Got it</PanelButtonText>
        </NotifPanelButton>
      </ContentContainer>
    </Wrapper>
  );
};

export default NotifPanel;
