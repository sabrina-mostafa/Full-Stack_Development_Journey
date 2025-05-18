import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {

  const [count, setCounter] = useState(0);

  let updateCount = ()=> {
    setCounter(count+1);
  };

  return (
    <>
      <Counter updateCount={updateCount} text="Click Me!">

        <h1>{count}</h1>
        <div children="Hiiiiii">
          <h3>this is Children</h3>

          <p children="Hi! This is a Children within tag">
            {/* this is also Children */}
          </p>
        </div>

      </Counter>
    </>
  )
}

export default App
