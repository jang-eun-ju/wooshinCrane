import React from "react"
import styled from "styled-components"
import GalleryCard from "../../Gallery/CardList/Card/GalleryCard.js"
import Card1 from './Card1.jpg';
import Card2 from './Card2.jpg';
import Card3 from './Card3.jpg';
const TodoListBlock = styled.div`
  border-radius: 30px;
  padding-bottom: 48px;
  display: flex;
  flex-wrap: wrap;
`

function CardListThree() {
  const todos = [
    {
        id: 1,
        done: true,
        img_url: Card1,
        title: '우신크레인',
        content: '안녕하세요. 우신크레인입니다.',
        username: '우철희',
        date: "2022.12.24"
    },
    {
        id: 1,
        done: true,
        img_url: Card2,
        title: '우신크레인',
        content: '안녕하세요. 우신크레인입니다.',
        username: '우철희',
        date: "2022.12.24"
    },
    {
        id: 1,
        done: true,
        img_url: Card3,
        title: '우신크레인',
        content: '안녕하세요. 우신크레인입니다.',
        username: '우철희',
        date: "2022.12.24"
    }
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

export default CardListThree