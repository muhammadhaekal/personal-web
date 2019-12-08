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
import { TEN_MINUTES_IN_MILISEC } from "../../constants";

class Newsletter extends Component {
  state = {
    isHidden: null
  };

  hideNewsletterPanel = () => {
    const currDate = new Date().getTime();
    const panelShowTime = currDate + TEN_MINUTES_IN_MILISEC;

    localStorage.setItem("panelShowTime", panelShowTime);
    this.setPanelSlideUpTimeout();

    this.setState({
      isHidden: true
    });
  };

  showNewsletterPanel = () => {
    this.setState({
      isHidden: false
    });
  };

  setPanelSlideUpTimeout = () => {
    if (localStorage.getItem("panelShowTime")) {
      const currDate = new Date().getTime();
      const cuntdownDuration =
        Number(localStorage.getItem("panelShowTime")) - currDate;

      setTimeout(() => {
        this.showNewsletterPanel();
      }, cuntdownDuration);
    }
  };

  componentDidMount = () => {
    this.setPanelSlideUpTimeout();
    this.setScrollListener();
  };

  setScrollListener = () => {
    window.addEventListener("scroll", e => {
      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= (1 / 3) * window.screen.height &&
        !localStorage.getItem("panelShowTime")
      ) {
        this.showNewsletterPanel();
      }
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
