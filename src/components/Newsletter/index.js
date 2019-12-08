import React from "react";
import {
  Wrapper,
  CenterDiv,
  NewsletterCard,
  NewsletterTitle,
  NewsletterDesc,
  CloseButton,
  FormWrapper,
  InputEmail,
  SubscribeButton
} from "./styled";

const Newsletter = () => {
  return (
    <Wrapper>
      <CenterDiv>
        <NewsletterCard>
          <CloseButton>X</CloseButton>
          <NewsletterTitle>
            Get latest updates in web technologies
          </NewsletterTitle>
          <NewsletterDesc>
            Get latest updates in web technologies I write articles related to
            web technologies, such as design trends, development tools, UI/UX
            case studies and reviews, and more. Sign up to my newsletter to get
            them all.
          </NewsletterDesc>
          <FormWrapper>
            <InputEmail
              type="text"
              name="email"
              placeholder="Email address"
            ></InputEmail>
            <SubscribeButton>Count Me In</SubscribeButton>
          </FormWrapper>
        </NewsletterCard>
      </CenterDiv>
    </Wrapper>
  );
};

export default Newsletter;