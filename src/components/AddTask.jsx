import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addhandler } from '../redux/Actions'

function TodoList() {
    const [description,setDescription]=useState('')
    const dispatch = useDispatch()
    const addhand=()=>{
        const todos={description,id:Math.random(),isDone:false}
        dispatch(addhandler(todos))
        setDescription('')
    }
  return (
    <div>
    
      <div>
        <input type='text' placeholder='hi there' value={description} onChange={(e)=>setDescription(e.target.value)} />
        <button onClick={addhand} >click here</button>
      </div>
        
    </div>
  )
}

export default TodoList