import { MainContainer, MainSectionBg, VideoBg,MainContent,MainH1,MainP,MainBtnWrapper} from "../../styles/Style";
import Video from "../../videos/video1.mp4";

const HomePagecomponent = () => {
<MainContainer>
    <MainSectionBg>
<VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
</MainSectionBg>
    <MainContent>
      <MainH1>Find your next event</MainH1>
      <MainP>What are you looking for?</MainP>
      <MainBtnWrapper>
        <button cl to="signup">Get Started</button>
      </MainBtnWrapper>
    </MainContent>
  </MainContainer>
}
export default HomePagecomponent;