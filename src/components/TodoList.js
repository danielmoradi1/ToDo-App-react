import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([])

    //Kontrollerar att Textfältet inte är tom 
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        // Om det är text läggs den till i i Todo array med hjälp av setTodos()
        const newTodos = [todo, ...todos];
        setTodos(newTodos);

        //Skriva i consolen
        console.log(todo, ...todos);
    };

    // Redigera
    // Kontrollerar att textfältet inte är tom för uppdatering
    // Uppdaterar i listan med den matchande id

    const updateTodo = (todo_Id, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todo_Id ? newValue : item)));
    };


    //Fuktionen tar ett id och filtrerar listan och tar bort med den matchande id
    const removeTodo = id => {
        const removeitem = [...todos].filter(todo => todo.id !== id)
        setTodos(removeitem)
    }

    //Funktionen är en extra egenskap för att märkera att en task har gjorts.
    // Tar ett id och mappar egnom listan hittar med den matchande id och byter egenskapen
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    // Den här komponenten renderar ett Todo-form-kompnent
    // Skickar onSubmit som anropar funktionen Add-Todo
    // ToDo kompnenten skickar det aktuella tillståndet för removeTodo, completeTodo och updateTodo
    return (
        <div>
            <h1>Att göra-listor</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}
                updateTodo={updateTodo} />
        </div>
    );
}

export default TodoList