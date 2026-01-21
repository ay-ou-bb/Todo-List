import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Todos from "./Todos.jsx"
import {useContext, useState, useEffect} from "react"
import {TodoContext} from './contexte/todoContext.jsx'
import { v4 as uuidv4 } from 'uuid';



export default function MyTodos() {

  

   

  // state
  const {todo, setTodo} = useContext(TodoContext)
  const [title , setTitle] = useState("")
  const [description , setDescription] = useState("")
  //==== state ====//

  

  let todoJsx = todo.map((item)=>{
    return <Todos todo = {item} key={item.id}  />
  })
 


// function of add todos
  function addButton (){
    setTodo([
      ...todo,{id:uuidv4(),title,description}
    ])
    setTitle("")
    setDescription("")
  }
//==== function of add todos===//



  return (
    <React.Fragment>
      <Container maxWidth="md">
          <Card sx={{ minWidth: 500,display:"flex" ,alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"10px" }}>
            <Typography variant="h2" gutterBottom>
              Todo List
            </Typography>
            <CardContent style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px"}}>

              {/* input filed and add button */}
              <TextField
               style={{margin:"10px"}} 
               label="Title" 
               variant="outlined"
               onChange={(e)=>{
                setTitle(e.target.value)
               }}
               type="text"
               placeholder="Title"
               value={title}
                /> 

             <TextField
               style={{margin:"10px"}} 
               label="Description" 
               variant="outlined"
               onChange={(e)=>{
                setDescription(e.target.value)
               }}
               type="text"
               placeholder="Description"
               value={description}
                /> 

              <Button onClick={addButton} style={{margin:"5px",height:"45px"}} variant="contained">Add</Button>
              {/*==== input filed and add button ====*/}

            </CardContent>
            <hr/>
            {todoJsx}
         </Card> 
      </Container>
    </React.Fragment>
  );
}