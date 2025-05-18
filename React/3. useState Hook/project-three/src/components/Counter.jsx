import React from 'react'
import { useState } from 'react'

const Counter = ({btnStyle}) => {
    const [count, setCount] = useState(0);
  return (
    <div>
      <div className="container">
        <p>You have clicked {count} times.</p>
        <button style={btnStyle} onClick={()=> { setCount(count+1) }} >Click Me!</button>
      </div>
    </div>
  )
}

export default Counter
