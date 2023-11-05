import { ADDTODO, DELTODO, EDITASKS, TOGGLETASK } from "./ActionTypes";

const initialstate = {
  tasks: [],
};
export const todoReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADDTODO:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case TOGGLETASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return {
              ...task,
              isDone: !task.isDone,
            };
          }
          return task;
        }),
      };
    case EDITASKS:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              description: action.payload.description
            };
          }
          return task;
        }),
      };
    case DELTODO:
      return {
        ...state,
        tasks: state.tasks.filter((e) => e.id !== action.payload),
      };
    default:
      return state;
  }
};