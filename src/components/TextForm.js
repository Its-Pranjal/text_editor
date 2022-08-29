import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase(); 
    setText(newText)
    props.showAlert("Converted to uppercase", "success")
  }
  const handleLoClick = ()=>{
    //console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase(); 
    setText(newText)
    props.showAlert("Converted to lowercase","success")
  }
  const handleClearClick = ()=>{
    //console.log("clear was clicked");
    let newText = " ";
    setText(newText)
    props.showAlert("Above text is cleared","success")
  }
  const handleCopy = ()=>{
    //console.log("copy was clicked");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied to clipboard","success")

  } 
  const handleExtraSpace = ()=>{
    //console.log("extra space was clicked");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra space is removed","success")
  }

  const handleOnChange = (event)=>{
    //console.log("on change");
    setText(event.target.value); //event.target.value is used to conrol event
  }

  const[text, setText] = useState("Enter Text Here");
  return (
    <>
    <div className="container" style={{ Color : props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
           
      <textarea className="form-control" value = {text} onChange={handleOnChange} style={{ backgroundColor : props.mode === 'light' ? 'white' : 'black',color :  props.mode === 'dark' ? 'white' : 'black'}} id="myBox"  rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to Uppercase </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to Lowercase</button> 
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button> 
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button> 
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button> 
    
    </div>
    <div className="container my-2" style={{ Color : props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split("").length}words and {text.length} charcters</p>
      <p>Average Reading Time  {0.008 * text.split(" ").length} mintues</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>

    </>
  )
}
  