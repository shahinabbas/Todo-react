import React, { useState, useRef, useEffect } from 'react'
import './Todo.css'
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { TiTick } from "react-icons/ti";


function Todo() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])

    const addTodo = () => {
        setTodos([...todos, { list: todo, id: Date.now(), status: false }])
        setTodo('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const inputRef = useRef('null')

    useEffect(() => {
        inputRef.current.focus();
    })
    const onDelete = (id) => {
        setTodos(todos.filter((to) => to.id !== id)
        )
    }
    const onComplete = (id) => {
        let complete = todos.map((list) => {
            if (list.id === id) {
                return ({ ...list, status: !list.status })
            }
            return list
        })
        setTodos(complete)
    }
    // const onEdit = (id => {
    //     setTodos([...todos,])
    // })

    return (
        <div className='head'><h2>Organize  your  work  and  life.</h2>
            <div className='container'>
                <h2>Todo</h2>
                <form className='form-group' onSubmit={handleSubmit}>
                    <input type='text' value={todo} ref={inputRef} placeholder='Enter task....' className='form-control' onChange={(event) => setTodo(event.target.value)} />
                    <button onClick={addTodo}>Add</button>
                </form>
                <div>
                    <ul className='list'>
                        {
                            todos.map((to) => (
                                <li className='list-items'>
                                    <div className='list-item-list' id={to.status ? 'list-item' : ''}>{to.list}</div>
                                    <span>
                                        <TiTick className='list-item-icons' id='complete' title='completr' onClick={() => onComplete(to.id)} />
                                        <AiFillEdit className='list-item-icons' id='edit' title='edit' onClick={() => ondevicemotion(to.id)} />
                                        <AiFillDelete className='list-item-icons' id='delete' title='delete' onClick={() => onDelete(to.id)} />
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                
            </div>
        </div>
        
    )
}
export default Todo

