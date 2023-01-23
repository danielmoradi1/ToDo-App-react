import React, {useState} from 'react'
import Todoform from './TodoForm';
import {AiOutlineClose} from "react-icons/ai";
import {AiOutlineEdit} from "react-icons/ai";

// Funktionen tar emot flera props och hanterar varje todo(index) i listan
const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null, 
        value: ''
    });

    const sumbitUpdate = value =>{
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id){
        return <Todoform edit={edit} onSubmit={sumbitUpdate} />;
    }

    
    /*
    Har renderas en div för varje todo som har en onClick som anropar "completeTodo"
    Vaje todo har två ikoner av react-icon som används för att redigera och radera.
    */
    return todos.map((todo, index)=> (
    
        <div className={todo.isComplete ? 'todo-row complete': 'todo-row'}
        key={index}>
            
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>

            <div className='icons'>
                <AiOutlineEdit
                onClick={() => setEdit({id: todo.id, value: todo.text})}
                className = 'edit-icon'
                />
                <AiOutlineClose 
                onClick={() => removeTodo(todo.id)}
                className = 'delete-icon'
                />
            </div>
        </div>
    ))
}

export default Todo