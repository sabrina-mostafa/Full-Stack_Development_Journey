import PropsCards from './Components/PropsCards'
import './App.css'

import pic1 from "./assets/p1.jpg"
import pic2 from "./assets/p2.jpg"
import pic3 from "./assets/p3.png"


function App() {

  return (
    <div className='container'>
     <PropsCards name="Sabrina Sabr" img={pic1} title=" : t1" cardBorder={{"border-radius":"12px"}}/>
     <PropsCards name="Sarjina Sara" img={pic2} title=" : t2" cardBorder={{"border-radius":"12px"}}/>
     <PropsCards name="Samira Alam" img={pic3} title=" : t3" cardBorder={{"border-radius":"12px"}}/>
    </div>
  )
}

export default App
