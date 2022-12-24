import './MainPage.css';
import MainImage from './MainImage/MainImage';
import CardList from './CardList/CardList';
import Button from 'react-bootstrap/Button';
import CardListThree from './CardList/CardListThree';
function MainPage() {
    return (
      <div className="MainPage_Main">
        <div className='MainPage_Image'> 
            <MainImage ></MainImage>
        </div>
        <div className='MainPage_Card'>
            <CardListThree></CardListThree>
        </div> 
        
        <div className='MainPage_GalleryPlus'>
            <Button variant="outline-secondary" href="/gallery">갤러리 더보기</Button>
        </div>
      </div>
    );
  }
  
  
  
  export default MainPage;