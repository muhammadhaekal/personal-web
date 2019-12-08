import React, { Component } from "react";
import NotifPanel from "../../components/NotifPanel";
import { Wrapper, CenterDiv } from "./styled";
import Jumbotron from "../../components/Jumbotron";
import MainContent from "../../components/Skills";
import PageFooter from "../../components/PageFooter";
class LandingPage extends Component {
  state = {
    isNotifHidden: false
  };

  hideNotifPanel = () => {
    this.setState({
      isNotifHidden: true
    });
  };

  render() {
    const { isNotifHidden } = this.state;

    return (
      <Wrapper>
        <NotifPanel
          hideNotifPanel={this.hideNotifPanel}
          isNotifHidden={isNotifHidden}
        ></NotifPanel>
        <CenterDiv isNotifHidden={isNotifHidden}>
          <Jumbotron></Jumbotron>
          <MainContent></MainContent>
          <PageFooter></PageFooter>
        </CenterDiv>
      </Wrapper>
    );
  }
}

export default LandingPage;
