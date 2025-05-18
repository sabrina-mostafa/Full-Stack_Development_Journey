import React from 'react'
import ColorSwitch from './ColorSwitch'

const ChangeColor = (props) => {

    function getRandomLightColor() {
        let r = 150 + Math.round(100 * Math.random());
        let g = 150 + Math.round(100 * Math.random());
        let b = 150 + Math.round(100 * Math.random());
        return `rgb(${r}, ${g}, ${b})`;
    }

    function handleChangeColor() {
        let changeColorDiv = document.querySelector(".changeColorDiv") ;
        // let bodyStyle = document.body.style;
        changeColorDiv.style.backgroundColor = getRandomLightColor();
    }



    return (
        <div className='changeColorDiv' style={{ width: '30rem', height: '12rem', border: "3px solid blue", display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column" }} onClick={props.handleClickOutside}>
            <ColorSwitch onChangeColor={handleChangeColor} />
            <h2>Clicks on the page: {props.clicks}</h2>
        </div>
    )
}

export default ChangeColor
