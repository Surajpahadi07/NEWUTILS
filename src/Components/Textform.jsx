import { useState } from "react";

export default function Textform() {
    const[text,setText] = useState("");

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    
    const handleOnUpper = (event)=>{
       setText(text.toUpperCase());
    
    }
    const handleOnLower = (event)=>{
       setText(text.toLocaleLowerCase());
    }
    const clear = (event)=>{
       setText("");
    }

    const handleProper = (event)=>{
      let tempArr = text.split(" ");
      let temp = "";
      tempArr.forEach(element => {
        element = element.charAt(0).toUpperCase()+element.substr(1,element.length).toLowerCase();
        temp = temp+" "+element;
        temp = temp.trim();
        setText(temp)
        
       });
    }

  return (
    <div className="mb-3" id="rahul">
    <label className="form-label">Enter your text</label>
    <textarea 
    className="form-control p-3 container" 
    id="exampleFormControlTextarea1" 
    rows="3"
    value={text}
    placeholder="Enter Text Here"
    onChange={handleOnChange}>

    </textarea>
    <div className="container my-3">
      <button className='btn btn-primary m-2' onClick={handleOnUpper}>Upper</button>
      <button className='btn btn-primary m-2' onClick={handleOnLower}>Lower</button>
      <button className='btn btn-primary m-2' onClick={handleProper}>Proper</button>
      <button className='btn btn-primary m-2' onClick={clear}>Clear</button>
      <div>
        <h2>Your Text Summary</h2>
        <p>Your text Contains {text.split(" ").length-1} words and {text.length}</p>
        <h2>Preview</h2>
        <p className="b-2">{text}</p>
        <p>rahul</p>
      </div>
    </div>
  </div>
  )
}
