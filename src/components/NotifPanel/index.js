import React, { Component } from "react";
import {
  CenterDiv,
  ContentContainer,
  TextContainer,
  NotifPanelButton,
  PanelButtonText,
  NotifPanelLink,
  Wrapper
} from "./styled";

class NotifPanel extends Component {
  render() {
    const { isNotifHidden, hideNotifPanel } = this.props;
    return (
      <Wrapper isHidden={isNotifHidden}>
        <CenterDiv>
          <ContentContainer>
            <TextContainer>
              By accessing and using this website, you acknowledge that you have
              read and understand our{" "}
              <NotifPanelLink href="https://www.cermati.com/pages/privacy-policy">
                Cookie Policy
              </NotifPanelLink>
              ,{" "}
              <NotifPanelLink href="https://www.cermati.com/pages/privacy-policy">
                Privacy Policy
              </NotifPanelLink>
              , and our{" "}
              <NotifPanelLink href="https://www.cermati.com/pages/privacy-policy">
                Terms of Service
              </NotifPanelLink>
              .
            </TextContainer>
            <NotifPanelButton
              onClick={() => {
                hideNotifPanel();
              }}
            >
              <PanelButtonText>Got it</PanelButtonText>
            </NotifPanelButton>
          </ContentContainer>
        </CenterDiv>
      </Wrapper>
    );
  }
}

export default NotifPanel;
