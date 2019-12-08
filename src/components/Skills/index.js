import React from "react";
import {
  Wrapper,
  HeaderContainer,
  BigText,
  SmallText,
  SkillsContainer,
  SkillCard,
  CardHeader,
  SkillDescription
} from "./styled";
import { skills } from "../../constants";

const MainContent = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <BigText>How Can I Help You?</BigText>
        <SmallText>
          Our work then targeted, best practices outcomes social innovation
          synergy. Venture philanthropy, revolutionary inclusive policymaker
          relief. User-centered program areas scale.
        </SmallText>
      </HeaderContainer>
      <SkillsContainer>
        {skills.map(skill => (
          <SkillCard>
            <CardHeader>
              {skill.name}
              <i class={skill.class}></i>
            </CardHeader>
            <SkillDescription>{skill.description}</SkillDescription>
          </SkillCard>
        ))}
      </SkillsContainer>
    </Wrapper>
  );
};

export default MainContent;
