import React from "react";
import { Wrapper, YLogoImg, NameText } from "./styled";
import yLogoImgSrc from "../../img/y-logo.png";
import { ContentContainer } from "../NotifPanel/styled";

const Jumbotron = () => {
  return (
    <Wrapper>
      <YLogoImg src={yLogoImgSrc}></YLogoImg>
      <ContentContainer>
        <NameText>Hello! I'm Haekal</NameText>
      </ContentContainer>
    </Wrapper>
  );
};

export default Jumbotron;
