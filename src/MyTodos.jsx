import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Todos from "./Todos.jsx"

export default function MyTodos() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
          <Card sx={{ minWidth: 500,display:"flex" ,alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"10px" }}>
            <Typography variant="h2" gutterBottom>
                  TodoList
            </Typography>
            <CardContent style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px"}}>
              {/* input filed and add button */}
              <TextField style={{margin:"10px"}} id="outlined-basic" label="Title" variant="outlined" /> 
              <TextField style={{margin:"10px"}} id="outlined-basic" label="Description" variant="outlined" />
              <Button style={{margin:"5px",height:"45px"}} variant="contained">Add</Button>
               {/*==== input filed and add button ====*/}
            </CardContent>
            <hr/>
            <Todos/> 
         </Card> 
      </Container>
    </React.Fragment>
  );
}