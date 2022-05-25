import React, { useState } from 'react'


export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [btnText, setBtnText] = useState("Enable Dark Mode")

  const toggleMode = ()=>{
    if(myStyle.color==="white")
    {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setBtnText("Enable Dark Mode")
    }
    else
    {
       setMyStyle({
         color: 'white',
         backgroundColor: 'black'
       })
       setBtnText("Enable Light Mode")
    }
  }

  return (
    <>
    <div className="container">
      <h1 style = {myStyle}>About us</h1>
      <button onClick={toggleMode} className='btn btn-primary'>{btnText}</button>
    </div>
    </>  
  )
}
