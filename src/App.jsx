import './App.css'
import MyTodos from './MyTodos.jsx'
import {TodoContext} from './contexte/todoContext.jsx'
import {useState,useEffect} from "react"
import { v4 as uuidv4 } from 'uuid';


function App() {
  

  const Addtodo = [
    {
      id:uuidv4(),
      title:"read book",
      description:"read part of the book every day"
    },
     {
      id:uuidv4(),
      title:"write book",
      description:"write part of the book every day"
    },
  ]
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
