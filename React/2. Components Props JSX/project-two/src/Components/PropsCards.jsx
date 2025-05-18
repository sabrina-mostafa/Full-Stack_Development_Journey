import React from 'react'
import "./PropsCards.css"

const PropsCards = (props) => {
  return (
    <div>
      <div className="card" style={props.cardBorder}>
        <p className="name">{props.name}</p>
        <img src={props.img} alt="name" className="pic" />
        <p className="title">This is my title {props.title}</p>
      </div>
    </div>
  )
}

export default PropsCards
