import './OnlineConsulting.css';
function OnlineConsulting() {
  
    return (
      <div className='OnlineConsulting_All'>
        <div className='OnlineConsulting_Header'>
          온라인 상담
        </div>
        <div className="OnlineConsulting_Jump"></div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <a id="OnlineConsulting_Btn" class="btn btn-success"href="tel:010-3656-6180">바로 전화</a>
          <div className="OnlineConsulting_Jump"></div>
          <a id="OnlineConsulting_Btn" class="btn btn-dark" type="button" href="/online_consulting/consulting">견적 문의</a>
        </div>
      </div>
    );
  }
  
  
  
  export default OnlineConsulting;