
import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

function App() {
  const [isLoggedIn, changeState] = useState(false);


  // -------------- 4. Early Return ----------------

  if(!isLoggedIn) {
    return (
      <>
      <LoginBtn isLoggedIn={isLoggedIn} showFunc={changeState}> <h2>current state: {Number(isLoggedIn)}</h2> </LoginBtn>
      </>
    )
  }

  return (
    <div>

      {isLoggedIn && (<LogoutBtn isLoggedIn={isLoggedIn} showFunc={changeState}> <h2>current state: {Number(isLoggedIn)}</h2> </LogoutBtn>)}

    </div>
  )






  // -------------- 3. Logical Operator ----------------

  // return (
  //   <div>

  //     {isLoggedIn && (<LogoutBtn isLoggedIn={isLoggedIn} showFunc={changeState}> <h2>current state: {Number(isLoggedIn)}</h2> </LogoutBtn>)}
  //     {!isLoggedIn && (<LoginBtn isLoggedIn={isLoggedIn} showFunc={changeState}> <h2>current state: {Number(isLoggedIn)}</h2> </LoginBtn>)}

  //   </div>
  // )






  // -------------- 2. Ternary Operator ----------------

  // return (
  //   <div>
  //     {
  //       isLoggedIn ? <LogoutBtn isLoggedIn={isLoggedIn} showFunc={changeState}>
  //         <h2>current state: {Number(isLoggedIn)}</h2> </LogoutBtn>
  //         :
  //         <LoginBtn isLoggedIn={isLoggedIn} showFunc={changeState}>
  //           <h2>current state: {Number(isLoggedIn)}</h2> </LoginBtn>
  //     }
  //   </div>
  // )






  // --------------  1. Conditional: if-else  -----------------

  // if(isLoggedIn) {
  //   return (
  //     <>
  //     <LogoutBtn isLoggedIn={isLoggedIn} showFunc={changeState}>

  //     <h2>current state: {Number(isLoggedIn)}</h2>

  //     </LogoutBtn>
  //     </>
  //   )
  // }
  // else {
  //   return (
  //     <>
  //     <LoginBtn isLoggedIn={isLoggedIn} showFunc={changeState}>

  //     <h2>current state: {Number(isLoggedIn)}</h2>

  //     </LoginBtn>
  //     </>
  //   )
  // }



}

export default App
