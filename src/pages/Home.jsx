
import "../pages/pages.css";
import Video from "../videos/video1.mp4";
import Button from '@mui/material/Button';
import { MainContainer, MainSectionBg, VideoBg,MainContent,MainH1,MainP,MainBtnWrapper} from "../styles/Style";



const HomePage = () => {
  return(
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
