

import emailjs from '@emailjs/browser';

function SendEmail() {
    const Dotenv = require('dotenv-webpack');

        module.exports = {
        // ...
        plugins: [
            new Dotenv({
            systemvars: true // 해당 옵션을 추가 작성
            }),
        ],
    };
    const sendEmail = () => {
        emailjs.init('User id');
        let templateParams  = {
            name : document.getElementById('userName').value,
            email : document.getElementById('email').value,
            phone : document.getElementById('phone').value,
            message : document.getElementById('message').value,
        }
        alert("견적 문의가 완료되었습니다. 빠른 시일 내에 답변드리겠습니다~.");
        console.log(templateParams);
        emailjs.send(process.env.REACT_APP_SERVER_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_ID).then(function(response){
            console.log('Success!', response.status, response.text); 
        }, function(error){
            console.log('Failed...', error);
      
        })
    }
    
    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">이름</label>
                    <input placeholder="ex. 홍길동" type="text" class="form-control" id="userName"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">이메일 주소</label>
                    <input placeholder="ex. hogildong1234@gmail.com" type="email" class="form-control" id="email" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">이메일로 견적에 대한 답변을 드릴 예정입니다. 부득이한 경우 전화로 답변 드리겠습니다. </div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">전화번호</label>
                    <input placeholder="ex. 010-xxxx-xxxx" type="text" class="form-control" id="phone"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">견적 내용</label>
                    <textarea placeholder="ex. 원하시는 날짜, 업무, 장소, 가격 등에 대해 작성해주시면 성실히 답변해드리겠습니다." class="form-control" id="message"/>
                </div>
                <a href = "/online_consulting" type="submit" class="btn btn-primary" onClick={sendEmail}>Submit</a>
            </form>
        </div>
      );
    }
    
    
    
    export default SendEmail;