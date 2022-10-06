import React from "react";
import {
  MainContent,
  MainP,
  MainBtnWrapper,
  MainH1,
  MainSectionBg,
  MainContainer,
  VideoBg,
  ArrowForward,
  ArrowRight,
  MainButton,
} from "../../styles/Style";
import { useState } from "react";
import Video from "../../videos/video.mp4";

function MainSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <MainContainer>
      <MainSectionBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </MainSectionBg>
      <MainContent>
        <MainH1> Czech Cooking Made Easy </MainH1>
        <MainP>
          Get inspired by amazing czech recipes and cook one for yourself.
        </MainP>
        <MainBtnWrapper>
          <MainButton
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </MainButton>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  );
}

export default MainSection;
