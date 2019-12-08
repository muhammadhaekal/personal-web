import React, { Component } from "react";
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

class Newsletter extends Component {
  state = {
    isHidden: false
  };

  hideNewsletterPanel = () => {
    this.setState({
      isHidden: true
    });
  };

  showNewsletterPanel = () => {
    this.setState({
      isHidden: false
    });
  };

  render() {
    const { isHidden } = this.state;

    return (
      <Wrapper>
        <CenterDiv>
          <NewsletterCard isHidden={isHidden}>
            <CloseButton
              onClick={() => {
                this.hideNewsletterPanel();
              }}
            >
              X
            </CloseButton>
            <NewsletterTitle>
              Get latest updates in web technologies
            </NewsletterTitle>
            <NewsletterDesc>
              Get latest updates in web technologies I write articles related to
              web technologies, such as design trends, development tools, UI/UX
              case studies and reviews, and more. Sign up to my newsletter to
              get them all.
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
  }
}

export default Newsletter;
