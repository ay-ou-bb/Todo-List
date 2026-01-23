import './App.css'
import MyTodos from './MyTodos.jsx'
import {TodoContext} from './contexte/todoContext.jsx'
import {useState,useEffect} from "react"
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo , setTodo] = useState(()=>{
    const saved = localStorage.getItem("todo")
    return saved ? JSON.parse(saved):[];
  })

  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todo))
  },[todo])

  

  return (
    <>
    <TodoContext.Provider value={{todo , setTodo }}>
      <MyTodos/>
    </TodoContext.Provider>
    </>
  )
}

export default App
