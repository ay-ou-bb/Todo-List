import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Todo from "./Todo.jsx";
import Grid from '@mui/material/GridLegacy';
import TextField from '@mui/material/TextField';
import {useState,useContext,useEffect} from "react"
import {TodosContext} from '../context/todosContext.js';
import { v4 as uuidv4 } from 'uuid';



export default function TodoList(){
    const {todos, setTodos} = useContext(TodosContext);
    const [titleInput ,setTitleInput] =useState("");
    const [displayedTodosType,setDisplayedTodosType] =useState("all");


     // filteration arrays
    const competedTodos= todos.filter((t)=>{
      return t.isCompleted
    })

     // filteration arrays
    const notCompetedTodos= todos.filter((t)=>{
      return !t.isCompleted
    })

    let todosTobeRender = todos

    
    if(displayedTodosType=="completed"){
      todosTobeRender=competedTodos
    }else if(displayedTodosType=="non-completed"){
      todosTobeRender=notCompetedTodos
    }else{
      todosTobeRender = todos
    }
    const todosJsx = todosTobeRender.map((t)=>{
      return <Todo key={t.id} todo={t}/>
    });

   

    useEffect(()=>{
      const storageTodos = JSON.parse(localStorage.getItem("todos"))??[];
      setTodos(storageTodos)
    },[])

    function chandeDisplayType(e){
      setDisplayedTodosType(e.target.value)
    }

    function handleAddClick(){
      const newTodo={
        id:uuidv4(),
        title:titleInput,
        details:"",
        isCompleted:false
      }
      const updatedTodos= [...todos ,newTodo]
      setTodos(updatedTodos);
      localStorage.setItem("todos",JSON.stringify(updatedTodos))
      setTitleInput("")
    }

     
     
    return(
      <Container maxWidth="sm">
          <Card sx={{ minWidth: 275 }}
           style={{
            // height:"100",
            maxHeight:"80vh",
            overflow:"scroll"
            }}>
            <CardContent>
                <Typography variant="h2" style={{fontWeight:"bold"}}>
                 مهامي
                </Typography>
                  <Divider/>

                  {/* filter BUTTONS */}
                    <ToggleButtonGroup
                       style={{direction:"ltr",marginTop:"30px"}}
                       value={displayedTodosType}
                        exclusive
                        onChange={chandeDisplayType}
                        aria-label="text alignment"
                        color="primary"
                        >
                        <ToggleButton value="non-completed"> غير المنجز</ToggleButton>
                        <ToggleButton value="completed"> المنجز</ToggleButton>
                        <ToggleButton value="all"> الكل</ToggleButton>
                    </ToggleButtonGroup>
                  {/* ===FILTER BUTTON === */}

                  {/* ALL todos */}
                  {todosJsx}
                  {/*====// ALL todos //===== */}

                  {/* input + add Button */}
                    <Grid container  style={{marginTop:"20px"}} spacing={2}>
                      <Grid item xs={8} display="flex" justifyContent="space-around" alignItems="center" style={{background:""}}>
                        <TextField
                         id="outlined-basic" 
                         label="عنوان المهمة" 
                         variant="outlined" 
                         style={{width:"100%"}}
                         value={titleInput}
                         onChange={(e)=>{
                          setTitleInput(e.target.value)
                         }}
                         />
                      </Grid>

                      <Grid item xs={4} display="flex" justifyContent="space-around" alignItems="center" style={{background:""}}>
                        <Button 
                          style={{width:"100%", height:"100%"}} 
                          variant="contained"
                          onClick={()=>{
                          handleAddClick();
                         }}
                         disabled={titleInput.length==0}
                        >اضافة</Button>
                      </Grid>

                    </Grid>
                  {/*=====// input + add Button //======*/}


            </CardContent>
                                                              
        </Card>
      </Container>
    
    )
}



