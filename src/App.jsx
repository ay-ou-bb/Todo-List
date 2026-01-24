import './App.css'
import MyTodos from './MyTodos.jsx'
import {TodoContext} from './contexte/todoContext.jsx'
import {useState,useEffect} from "react"
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todos , setTodos] = useState(()=>{
    const saved = localStorage.getItem("todo")
    return saved ? JSON.parse(saved):[];
  })

  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todos))
  },[todos])

  

  return (
    <>
    <TodoContext.Provider value={{todos , setTodos }}>
      <MyTodos/>
    </TodoContext.Provider>
    </>
  )
}

export default App
