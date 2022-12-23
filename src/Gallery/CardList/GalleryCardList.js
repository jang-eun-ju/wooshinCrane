import React from "react"
import styled from "styled-components"
import GalleryCard from "./Card/GalleryCard.js"
import CardList1 from './CardList1.jpg';
import CardList2 from './CardList2.jpg';
import CardList3 from './CardList3.jpg';
import CardList4 from './CardList4.jpg';
import CardList5 from './CardList5.jpg';
import CardList6 from './CardList6.jpg';
import CardList7 from './CardList7.jpg';
const TodoListBlock = styled.div`
  border-radius: 30px;
  padding-bottom: 48px;
  display: flex;
  flex-wrap: wrap;
`

function CardList() {
  const todos = [
    {
        id: 1,
        done: true,
        img_url: CardList1,
        title: '우신크레인',
        content: '안녕하세요. 우신크레인입니다.',
        username: '우철희',
        date: "2022.12.24"
    },
    {
        id: 1,
        done: true,
        img_url: CardList2,
        title: '우신크레인',
        content: '안녕하세요. 우신크레인입니다.',
        username: '우철희',
        date: "2022.12.24"
    },
    {
        id: 1,
        done: true,
        img_url: CardList3,
        title: '우신크레인',
        content: '안녕하세요. 우신크레인입니다.',
        username: '우철희',
        date: "2022.12.24"
    },
    {
        id: 1,
        done: true,
        img_url: CardList4,
        title: '우신크레인',
        content: '안녕하세요. 우신크레인입니다.',
        username: '우철희',
        date: "2022.12.24"
    },
    {
        id: 1,
        done: true,
        img_url: CardList5,
        title: '우신크레인',
        content: '안녕하세요. 우신크레인입니다.',
        username: '우철희',
        date: "2022.12.24"
    },
    {
        id: 1,
        done: true,
        img_url: CardList6,
        title: '우신크레인',
        content: '안녕하세요. 우신크레인입니다.',
        username: '우철희',
        date: "2022.12.24"
    },
    {
        id: 1,
        done: true,
        img_url: CardList7,
        title: '우신크레인',
        content: '안녕하세요. 우신크레인입니다.',
        username: '우철희',
        date: "2022.12.24"
    },
  
  ]

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <GalleryCard
          key={todo.id}
          id={todo.id}
          done={todo.done}
          img_url={todo.img_url}
          title={todo.title}
          content={todo.content}
          username={todo.username}
          date={todo.date}
        />
      ))}
    </TodoListBlock>
  )
}

export default CardList