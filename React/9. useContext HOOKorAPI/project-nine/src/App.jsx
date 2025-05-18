import { useState } from 'react';
import { createContext } from 'react';
import './App.css'
import ChildA from './components/ChildA'



// step1: create context
  const UserContext = createContext();
  const ThemeContext = createContext();


function App() {
  const [user, setUser] = useState({name: "Sabrina"});
  const [theme, setTheme] = useState("Light");

  return (
    <>
    {/* step2: wrap all the child inside a context provider */}
    
    <UserContext.Provider value={user}>

      <ThemeContext.Provider value={{theme, setTheme}}>   {/* step3: in provider, pass value to consumer */}

        <div className='themeContainer' style={{backgroundColor:theme==="Light"?"beige":"rgb(38, 38, 117)", color:theme==="Light"?"black":"white"}}>
          
          <ChildA/>
          
        </div>

      </ThemeContext.Provider>

    </UserContext.Provider>
      
    </>
  )
}

export default App
export {ThemeContext}
export {UserContext}   // step4: export the Context var
// step5: go to the desired child and directly consume the value/context
