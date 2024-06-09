import React,{useState} from 'react'
export default function TextForm(props) {
    const handleOnClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handlelOClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleCopy =() =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style= {{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value ={text} onChange={handleOnChange} style= {{backgroundColor:props.mode==='dark'?'#212529':'white',color:props.mode==='dark'?'white':'black'}}id="myBox" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick= {handleOnClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick= {handlelOClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick= {handlelOClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick= {handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick= {handleExtraSpaces}>Remove Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length}character</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
