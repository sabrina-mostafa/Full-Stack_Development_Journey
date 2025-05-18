import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate();

    let handleClick = ()=> {
        navigate("/dashboard");
    }


  return (
    <div>
      About Page
      <br />
      <br />
      <button onClick={handleClick}>
        Move to Dashboard Page
      </button>
    </div>
  )
}

export default About
