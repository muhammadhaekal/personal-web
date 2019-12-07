import React from "react";
import NotifPanel from "../../components/NotifPanel";
import { Wrapper, CenterDiv } from "./styled";
import Jumbotron from "../../components/Jumbotron";

const LandingPage = () => {
  return (
    <Wrapper>
      <NotifPanel></NotifPanel>
      <CenterDiv>
        <Jumbotron></Jumbotron>
      </CenterDiv>
    </Wrapper>
  );
};

export default LandingPage;
