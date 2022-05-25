import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react'
import About from './components/About'
import Alert from './components/Alert';
import {
  Routes,
  Route,
} from "react-router-dom";

function App(){
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState()
  const [msg, setMsg] = useState("")

  const showAlert = (alert, msg) => {
    setAlert(alert);
    setMsg(msg);

    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }

  const toggleMode = () =>{
     if(mode==='dark') 
     {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert(true, "Dark Mode is disabled !")
     }
     else 
     {
       setMode('dark')
       document.body.style.backgroundColor = 'rgb(13 14 14)';
       showAlert(true, "Dark Mode is enabled !")
     }
  }

  return (
       <>
       <Navbar title="textutils" mode={mode} toggleMode = {toggleMode}/>  
       <Alert alert={alert} msg={msg}></Alert>
         <Routes>
         <Route exact path="/" element={<TextArea heading="Enter your Text to Analyze" mode={mode} showAlert={showAlert} alert={alert} msg={msg}/>}/>   
           <Route exact path="/About" element={<About/>}/>
         </Routes>        
       </>     
  );
}


export default App;
