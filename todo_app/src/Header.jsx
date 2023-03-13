import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Header({setTodoList}) {

    const [inputValue, setInputValue] = useState('')

    function handleKeyDown(e) {
        if(e.key === 'Enter'){
            e.preventDefault()
            if(inputValue != ''){
                setTodoList(prev => ([...prev, {id:uuidv4(), type:'incomplete', value: inputValue, display:true}]))
                setInputValue('')
            }
        }
    }




    return(
        <header className="header">
            <h1>todos</h1>
            <form mv-action="set(newTodo, newTodo.trim()), if(newTodo != '', add(newTodo, todo) & set(newTodo, ''))">
                <input property="newTodo" className="new-todo"
                        placeholder="What needs to be done?"
                        autoFocus 
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        value={inputValue} />
            </form>
	    </header>
    )
}