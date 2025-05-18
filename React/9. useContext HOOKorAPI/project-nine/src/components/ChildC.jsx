import React, { useContext } from 'react'
import { ThemeContext, UserContext } from '../App'

const ChildC = () => {
    // step5: directly consuming the value/context

    const user = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext)


    function toggleTheme () {
        if(theme==='Light') {
            setTheme('Dark')
        }
        else {
            setTheme('Light');
        }
    }

  return (
    <div>
        <p>Theme is in: <b style={{fontSize:"20px"}}>"{theme}"</b>  Mood</p>
        
        <button onClick={toggleTheme}>Change theme</button>

        <p>Owner Name: <b>{user.name}</b>  </p>
      
    </div>
  )
}

export default ChildC
