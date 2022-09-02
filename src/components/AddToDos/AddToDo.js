import "./AddToDo.css";
import { useState } from "react";



const AddToDoField = ({addToDo}) => {

    const [text, setText] = useState("");
    
    return (
        <>
        <form onSubmit={(e) => {
            e.preventDefault();
            addToDo(text);
            setText("")
            
            }}
        className="addToDoField">
           <input type="text" onChange={(e) => {
            setText(e.target.value)}}
            value={text} placeholder="Add your task..."/>
           <button>Add</button>
        </form>
        </>
    )
}

export default AddToDoField;