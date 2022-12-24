
import SendEmail from './SendEmail/SendEmail';
import './Consulting.css';
function Consulting() {
  
    return (
      <div>
        <div className='Consulting_Header'>
          견적 문의
        </div>
        <div className='Consulting_Body'>
          <SendEmail></SendEmail>
        </div>
      </div>
    );
  }
  
  
  
  export default Consulting;