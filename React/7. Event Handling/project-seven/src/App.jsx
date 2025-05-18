
import { useState } from 'react';
import './App.css'
import ChangeColor from './components/ChangeColor';

function App() {

  const [clicks, setClicks] = useState(0);

  function handleClickOutside() {
    setClicks(clicks+1);
  }


  function handleSubmit(e) {
    e.preventDefault();
    alert("Submitted");
  }


  const [val, setVal] = useState("");
  function handleInputChange(event) {
    console.log("Value Changed till now:", event.target.value);
    setVal(event.target.value) ;
  }


  function handleMouseOver() {
    alert("Hovered over the Para");
  }

  function handleClick() {
    alert("The button is Clicked");
  }



  return (
    <>

    {/* Immediately invokes the function before clicking */}
    {/* <button onClick={alert("Immediate Invocation")}>Test1</button> */}

    {/* right way: passing a function's reference */}
    <button onClick={ ()=> {alert("Invocation after clicked")} }>Test2</button>



    <form action="" onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} />
      <button style={{marginLeft:"1rem"}} type='submit'>Submit</button>
      <p>Output of the Input: {val} </p>

    </form> <br/>


    <p onMouseOver={handleMouseOver} style={{border:"2px solid red", padding:"1rem", width:"18rem"}}>
      I am a para. Hover mouse over me.
    </p>  <br />


    <button onClick={handleClick} style={{marginBottom:"2rem"}}>
      Click Me!
    </button>

    <ChangeColor handleClickOutside={handleClickOutside} clicks={clicks} >

    </ChangeColor>
      
    </>
  )
}

export default App
