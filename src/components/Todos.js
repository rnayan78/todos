import React from 'react';
import Todoitem from "../components/Todoitem";

export const Todos = (props) => {
    let myStyle = {
        minHeight:"70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className=" my-3">Todos List</h3>
            {props.todos.length===0?<h4>"No work left, Yayy!!"</h4>:
            props.todos.map((todo) => {
                return(<Todoitem todo = {todo} key={todo.sno} onDelete={props.onDelete}/>
                )
            })}
            
        </div>
    )
}

export default Todos;
