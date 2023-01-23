import React, { useState, useEffect, useRef } from 'react';


function Todoform(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    };


    /*
    Den här funktionen anropar prop-funktionen "onSubmit" 
    med ett objekt som innehåller texten och ett slumpmässigt genererat id. 
    */
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        /*
        Komponenten har ett formulärelement med en onSubmit som anropar 
        en funktion "handleSubmit" när formuläret skickas.
        Kontrollerar om edit är sant så uppdatera annars kan man lägga till i listan
        */
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (<>
                <input
                    type="text"
                    placeholder="Att göra"
                    value={input}
                    name="text"
                    className='todo-input'
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className='todo-button'>Uppdatera</button>
            </>) :

                (<>
                    <input
                        type="text"
                        placeholder="Att göra"
                        value={input}
                        name="text"
                        className='todo-input'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button'>Lägga till</button>
                </>
                )}
        </form>
    );
}

export default Todoform