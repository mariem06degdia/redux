import React from 'react'
import { useDispatch } from 'react-redux'
import { delHandler, editHandler, toggleHandler } from '../redux/Actions'

function Todo({task}) {
  const dispatch = useDispatch()
  const handleToggle = () =>{
    dispatch(toggleHandler(task.id))
  }
  const handleEdit=(newDescription)=>{
    dispatch(editHandler(task.id,newDescription))
  }
const handledelete = ()=>{
  dispatch(delHandler(task.id))
}
  return (
    <div>
    <div>
       <input type='checkbox' onChange={handleToggle} checked = {task.isDone}/>
       <input type='text' value={task.description} onChange={(e)=>handleEdit(e.target.value)}/>
    </div>
    <div>
    <button onClick={handledelete} >DELETE</button>
    </div>
    </div>
  )
}

export default Todo