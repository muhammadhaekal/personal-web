import React from "react";
import {
  Wrapper,
  YLogoImg,
  NameText,
  SkillsText,
  MessageText,
  ContentWrapper,
  ContactButton
} from "./styled";
import yLogoImgSrc from "../../img/y-logo.png";

const HeroShot = () => {
  return (
    <Wrapper>
      <YLogoImg src={yLogoImgSrc}></YLogoImg>
      <ContentWrapper>
        <NameText>Hello! I'm Haekal</NameText>
        <SkillsText>Consult, Design, and Develop Websites</SkillsText>
        <MessageText>
          <div>Have something great in mind? Feel free to contact me.</div>
          <div>I'll help you to make it happen.</div>
        </MessageText>
        <ContactButton>LET`S MAKE CONTACT</ContactButton>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroShot;
