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
  state = {
    isHidden: false
  };

  hideNotifPanel = () => {
    this.setState({
      isHidden: true
    });
  };

  render() {
    const { isHidden } = this.state;
    return (
      <Wrapper isHidden={isHidden}>
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
                this.hideNotifPanel();
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
