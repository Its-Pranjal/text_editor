import React,{useState} from 'react';

export default function TextForm(props) {
  const handleUpClick = ()=>{
    
    let newText = text.toUpperCase(); 
    setText(newText)
    props.showAlert("Converted to uppercase", "success")
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase(); 
    setText(newText)
    props.showAlert("Converted to lowercase","success")
  }
  const handleClearClick = ()=>{
    
    let newText = "";
    setText(newText)
    props.showAlert("Above text is cleared","success")
  }
  const handleCopy = ()=>{
    
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied to clipboard","success")

  } 
  const handleExtraSpace = ()=>{
    
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra space is removed","success")
  }

  const handleOnChange = (event)=>{
    
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
      <button disabled= {text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>convert to Uppercase </button>
      <button disabled= {text.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}>convert to Lowercase</button> 
      <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button> 
      <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button> 
      <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button> 
    
    </div>
    <div className="container my-2" style={{ Color : props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length}words and {text.length} charcters</p>
      <p>Average Reading Time  {0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} mintues</p>
      <h2>Preview</h2>
      
      <p>{text.length>0?text:'Nothing to Preview !'}</p>
    </div>

    </>
  )
}
  
