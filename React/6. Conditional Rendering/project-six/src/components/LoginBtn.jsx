import React from 'react'

const LoginBtn = (props) => {
  return (
    <div>

      <p>{props.children}</p>

      <button onClick={()=> {props.showFunc(true)}}>Login</button>
      <p>number1: {Number(props.isLoggedIn)}</p>
    
    </div>
  )
}

export default LoginBtn
