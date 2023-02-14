import React,{useState} from "react";

function Input(props) {

    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className="input-container">
      <input type="text" className="input-box-todo" placeholder="Please enter task (Word Limit:50)" value={inputText} onChange={e=>{setInputText(e.target.value) }} onKeyDown={handleEnterPress}/>
      <button className="add-btn" onClick={()=>{ props.addList(inputText),setInputText("")}}>Add</button>      
    </div>
  );
}

export default Input;