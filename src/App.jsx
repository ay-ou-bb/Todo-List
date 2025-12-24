import TodoList from './components/TodoList.jsx';
import {createTheme,ThemeProvider} from "@mui/material/styles" ;
import {TodosContext} from './context/todosContext.js';
import { v4 as uuidv4 } from 'uuid';
import {useState} from "react"
// import viteLogo from '/vite.svg'
import './App.css'

const theme = createTheme({
  typography:{
    fontFamily:[
      "Alexandria"
    ]
  },
  palette:{
    primary:{
      main:"#dd2c00"
    }
  }
});

const initialTodos=[
  {
    id:uuidv4(),
    title:"قراءة كتاب",
    details:"قراة جزء كل يوم",
    isCompleted:false,
  },
  {
    id:uuidv4(),
    title:"قراءة كتاب",
    details:"قراة جزء كل يوم",
    isCompleted:false,
  },
   {
    id:uuidv4(),
    title:"قراءة كتاب",
    details:"قراة جزء كل يوم",
    isCompleted:false,
  }
]


function App() {
  const [todos ,setTodos] = useState(initialTodos)
  return (
    <ThemeProvider theme={theme}>
    <div className="App" style={{display:"flex" , justifyContent:"center", alignItems:"center",height:"100vh", background:"#191b1f", direction :"rtl",padding:"10px"}}>
      <TodosContext.Provider value={{todos,setTodos}}>
         <TodoList/>
      </TodosContext.Provider>
    </div>
    </ThemeProvider>
  )
}

export default App
