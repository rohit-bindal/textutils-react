import React, {useState} from 'react'
import Alert from './Alert'

export default function TextArea(props) {
    const [text, setText] = useState("")
    const handleUpClick = (e) => {
        let newText = text.toUpperCase()
        setText(newText)
        e.preventDefault();
        props.showAlert(true, "Text is converted to upper case !")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLoClick = (e) => {
        e.preventDefault();
        setText(text.toLowerCase())
        props.showAlert(true, "Text is converted to lower case !")
    }

  return (
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
          <h5>{props.heading}</h5>
    <form>
    <div className="form-group" >
    <textarea style={{backgroundColor: props.mode==='dark'?'#212526':'white',
  color: props.mode==='dark'?'white':'black'}} value={text} onChange = {handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <br />
  <button disabled = {text.length==0} className="btn btn-primary mx-2 my-2" onClick = {handleUpClick}>Convert to UpperCase</button>
  <button disabled = {text.length==0} className="btn btn-primary mx-2 my-2" onClick = {handleLoClick}>Convert to LowerCase</button>
</form>

<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
<h2>Your Text Summary</h2>
<p>Words: {text.split(/\s+/).filter((element)=>{return element.length!=0}).length} and Characters: {text.length}</p>
<p>read time: {0.008*text.split(" ").filter((element)=>{return element.length!=0}).length} minutes</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Nothing for preview !"}</p>
</div>
      </div>         
  )
}
