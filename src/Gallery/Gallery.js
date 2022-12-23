import GalleryCardList from "./CardList/GalleryCardList.js";
import './Gallery.css';
function Gallery() {
    return (
      <div>
        <div className="Gallery_Header">
            갤러리
        </div>
        <div className="Gallery_Body">
            <GalleryCardList></GalleryCardList>
        </div>
      </div>
    );
  }
  
  
  
  export default Gallery;