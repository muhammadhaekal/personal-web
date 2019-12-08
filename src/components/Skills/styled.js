import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #e5e5e5;
`;

export const HeaderContainer = styled.div`
  margin-bottom: 32px;
`;

export const BigText = styled.div`
  font-size: 32px;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 32px;
  color: rgb(102, 102, 102);
`;

export const SmallText = styled.div`
  font-size: 18px;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  color: rgb(102, 102, 102);
`;

export const SkillsContainer = styled.div`
  padding: 0 20px 40px 20px;
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 20px;
  row-gap: 15px;
  @media (max-width: 960px) and (min-width: 481px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 480px) {
    grid-template-columns: auto;
  }
`;

export const SkillCard = styled.div`
  padding: 15px;
  border: 1px solid rgb(102, 102, 102);
  color: rgb(102, 102, 102);
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 22px;
`;

export const SkillDescription = styled.div`
  margin-top: 12px;
  font-size: 15px;
`;
