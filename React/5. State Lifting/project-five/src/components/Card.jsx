import React from 'react'

const Card = (props) => {
  return (
    <div>
        <input type="text" onChange={ (event)=> {props.changingFunc(event.target.value)}} />

        <p>{props.title} {props.name}</p>
      
    </div>
  )
}

export default Card
