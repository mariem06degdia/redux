import { ADDTODO, DELTODO, EDITASKS, TOGGLETASK } from "./ActionTypes"

export const addhandler=(newTodo)=>{
    return  {
        type :ADDTODO,
        payload:newTodo
    }
}
export const toggleHandler=(taskId)=>{
  return{
    type:TOGGLETASK,
    payload:taskId
  }
}
export const editHandler=( taskId,  newDescription)=>{
    return{
      type: EDITASKS,
      payload:{
        id:taskId,description:newDescription
      }
    }
}
export const delHandler=(taskId)=>{
    return{
      type: DELTODO,
      payload:taskId
    }
}