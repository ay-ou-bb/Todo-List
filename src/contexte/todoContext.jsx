import {createContext, useState,useEffect, useReducer} from "react"
import {todosReducer} from  '../todosReducer.jsx'

export  const TodoContext = createContext([])

export default function TodoProvider({children}){
      const initializer = () => {
    const saved = localStorage.getItem("todo");
    try {
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  };

  const [todos, dispatch] = useReducer(todosReducer, [], initializer);

  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todos))
  },[todos])

    return (
        <TodoContext.Provider value={{todos , dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}