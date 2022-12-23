import main1 from './Main1.jpg';
import main2 from './Main2.jpg';
import ImageSlider, { Slide } from "react-auto-image-slider";
import './MainImage.css';
function MainImage() {
  return (
        <ImageSlider  effectDelay={500} autoPlayDelay={2000}>
        <Slide>
                <img alt="img1" src={main1} />

        </Slide>
        <Slide>
     
                <img alt="img2" src={main2} />
         
        </Slide>
        </ImageSlider>
  );
}

export default MainImage;