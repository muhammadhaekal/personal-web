import styled from "styled-components";
import jumbotronImgSrc from "../../img/jumbotron-img.jpg";

export const Wrapper = styled.div`
  background: #004a75 url(${jumbotronImgSrc}) center center no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  height: 640px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const YLogoImg = styled.img`
  position: absolute;
  top: 25px;
  left: 25px;
  width: 45px;
  height: 45px;
`;

export const ContentWrapper = styled.div`
  max-width: 720px;
  text-align: center;
`;

export const NameText = styled.div`
  color: #ffffff;
  font-size: 38px;
`;

export const SkillsText = styled.div`
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`;

export const MessageText = styled.div`
  color: #ffffff;
  font-size: 18px;
  padding-top: 15px;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const ContactButton = styled.span`
  border: 1px solid #ffffff;
  color: #ffffff;
  padding: 15px 20px;
  margin-top: 20px;
  cursor: pointer;
`;
