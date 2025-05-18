
import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
  

  // variantion: 1
  // run on every render
  // useEffect(() => {
  //   alert("I will run on each render");

  // })


  // variantion: 2
  // run on only first time render
  // useEffect(() => {
  //   alert("I will render on only first time render");
  // }, [])


  // variantion: 3
  // run on every time a dependancy variable is changed
  // useEffect(() => {
  //   alert(`I will run every time count is changed. Count: ${count}`);
  // }, [count])


  // variantion: 4
  // Multiple dependancies
  // useEffect(() => {
  //   alert(`I will change whenever count/total is changed Count:${count} Total:${total}`)
  // }, [count, total])
  

  // variantion: 5
  // added a cleanup function
  useEffect(() => {
    alert(`Count Updated. Count: ${count}`);
  
    return () => {
      alert(`Count is unmounted from UI for count: ${count}`);
    }
  }, [count])
  



  
  

  return (
    <>

    <div>
      <h2>Count: {count}</h2>
      <button onClick={()=> { setCount(c=>c+1) }}>Change Count!</button>
      <br />
      <h2>Total: {total}</h2>
      <button onClick={()=> { setTotal(c=>c+1) }}>Change Total!</button>
    </div>

    </>
  )
}

export default App
