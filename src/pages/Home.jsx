import React from "react";
//import Home from "../components/Home";
import bgImg from "../images/bgIMG.jpg";
import "../pages/pages.css";
import Video from "../videos/video1.mp4";
import Pagination from "../components/Pagination";
import FilterCategory from "../components/FilterCategory";
import Button from '@mui/material/Button';
import { MainContainer,Img, MainSectionBg, VideoBg,MainContent,MainH1,MainP,MainBtnWrapper, InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap } from "../styles/Style";

const HomePage = () => {
  
  return (
  <>
  <MainContainer>
    <MainSectionBg>
<VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
</MainSectionBg>
    <MainContent>
      <MainH1>Find your next event</MainH1>
      <MainP>What are you looking for?</MainP>
      <MainBtnWrapper>
        <Button variant="contained" to="signup">Get Started</Button>
      </MainBtnWrapper>
    </MainContent>
  </MainContainer>
    </>
  );
}

export default HomePage;
