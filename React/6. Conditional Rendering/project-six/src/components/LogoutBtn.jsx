import React from 'react'
 
const LogoutBtn = (props) => {
  return (
    <div>
       <p>{props.children}</p>

      <button onClick={()=> {props.showFunc(false)}}>Logout</button>
      <p>number2: {Number(props.isLoggedIn)} </p>
    </div>
  )
}

export default LogoutBtn
