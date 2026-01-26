import './App.css'
import MyTodos from './MyTodos.jsx'
import TodoProvider from './contexte/todoContext.jsx'
import {useState,useEffect} from "react"
import { v4 as uuidv4 } from 'uuid';


function App() {
 

  

  return (
    <>
    <TodoProvider >
      <MyTodos/>
    </TodoProvider>
    </>
  )
}

export default App
