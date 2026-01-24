import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import {useTheme,useMediaQuery} from "@mui/material"
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
  const {todos, setTodos} = useContext(TodoContext)
  const [title , setTitle] = useState("")
  const [description , setDescription] = useState("")
  const [checked , setChecked] = useState(false)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  //==== state ====//

  

  

  


// function of add todos
  function addButton (){
    setTodos([
      ...todos,{id:uuidv4(),title,description,isChecked:false}
    ])
    setTitle("")
    setDescription("")
  }
//==== function of add todos===//

let todoJsx = todos.map((item)=>{
    return <Todos todo ={item}  isMobile={isMobile} key={item.id }/>
  })



  return (
    <React.Fragment>
      <Container maxWidth="md" disableGutters sx={{width:{xs:"100%", sm:"100%", mx:"auto"}}}> 
          <Card sx={{display:"flex" ,alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"10px" }}>
            <Typography variant={isMobile?"h4":"h2"} gutterBottom sx={{fontFamily:isMobile?"400":"800"}}>
              Todo List
            </Typography>
            <CardContent style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px" , flexDirection:isMobile?"column":"row"}}>

              {/* input filed and add button */}
              <TextField
               style={{margin:"10px" }} 
               size={isMobile?'small':'medium'}
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
               size={isMobile?'small':'medium'}
               label="Description" 
               variant="outlined"
               onChange={(e)=>{
                setDescription(e.target.value)
               }}
               type="text"
               placeholder="Description"
               value={description}
                /> 

              <Button onClick={addButton} style={{margin:"5px",height:isMobile?"30px":"45px"}}  variant="contained">Add</Button>
              {/*==== input filed and add button ====*/}

            </CardContent>
            <hr/>
            {todoJsx}
         </Card> 
      </Container>
    </React.Fragment>
  );
}