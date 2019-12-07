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
`;

export const NameText = styled.div`
  color: #ffffff;
  font-size: 38px;
`;
