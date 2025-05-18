import React from 'react'

const ColorSwitch = (props) => {
  return (
    <div>
        <button onClick={(e)=> { 
            e.stopPropagation();   // without this the click count also changes along with the color

            props.onChangeColor();
            
        }}>
            Change Color
        </button>
    </div>
  )
}

export default ColorSwitch
