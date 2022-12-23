import MainCard from "../MainCard/MainCard";
import Card1 from "./Card1.jpg";
import Card2 from "./Card2.jpg";
import Card3 from "./Card3.jpg";
import './CardList.css';
import React, { useState, useEffect } from 'react';

function CardList() {
  const [content, setContent] = useState([
    {
      title : "크레인",
      text : "안녕하세요. 우신크레인입니다. 반갑습니다. 감사합니다."
    },
    {
      title : "크레인",
      text : "안녕하세요. 우신크레인입니다. 반갑습니다. 감사합니다."
    },
    {
      title : "크레인",
      text : "안녕하세요. 우신크레인입니다. 반갑습니다. 감사합니다."
    }
  ]);

  useEffect(() => {
    setContent([
      {
        title : "크레인",
        text : "안녕하세요. 우신크레인입니다. 반갑습니다. 감사합니다."
      },
      {
        title : "크레인",
        text : "안녕하세요. 우신크레인입니다. 반갑습니다. 감사합니다."
      },
      {
        title : "크레인",
        text : "안녕하세요. 우신크레인입니다. 반갑습니다. 감사합니다."
      }
    ])
  });
  return (
    
    <div class="container">
      <div class="row">
          <div class="col-lg-3 d-flex align-items-strength">
            <MainCard image={Card1} title={content[0].title} text= {content[0].text}></MainCard>
          </div>
          <div class="col-lg-3 d-flex align-items-strength">
            <MainCard image={Card2} title={content[1].title} text= {content[1].text}></MainCard>
          </div>
          <div class="col-lg-3 d-flex align-items-strength">
            <MainCard image={Card3} title={content[2].title} text= {content[2].text}></MainCard>
          </div>
      </div>
    </div>

  );
}

export default CardList;