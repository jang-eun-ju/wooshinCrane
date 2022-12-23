import cago from './카고크레인.jpg';
import hidro from './하이드로크레인.jpg';
import './BusinessImage.css';
function BusinessImage() {
    return (
      <div>
        <div className='BusinessImage_Container1'>
            <img src={cago}></img>
        </div>
        <div className='BusinessImage_Content1'>
            <div className="BusinessImage_Text" id="BusinessImage_Title">하이드로 크레인</div>
            <div className="BusinessImage_Text" id="BusinessImage_Content">
            컨테이너/공장기계/호이스트/변압기/조립식건물/철구조물/간판/가로등
에어컨/냉동기/바구니작업/조경/물탱크/페인트/각종중량물/상하차
            </div>
            
        </div>
        {/* <div className='BusinessImage_Container2'>
            <img src={hidro}></img>
        </div>
        <div className='BusinessImage_Content2'>
            <div className="BusinessImage_Text" id="BusinessImage_Title">하이드로크레인</div>
            <div className="BusinessImage_Text" id="BusinessImage_Content">
            컨테이너/공장기계/호이스트/변압기/조립식건물/철구조물/간판/가로등
에어컨/냉동기/바구니작업/조경/물탱크/페인트/각종중량물/상하차
            </div>
        </div> */}
      </div>
    );
  }
  
  
  
  export default BusinessImage;