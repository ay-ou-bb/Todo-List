import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function MyTodos() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
          <Card sx={{ minWidth: 500 }}>
            <Typography variant="h2" gutterBottom>
                  TodoList
            </Typography>
            <hr/>
            <CardContent style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px"}}>
              {/* input filed and add button */}
              <TextField style={{margin:"10px"}} id="outlined-basic" label="Title" variant="outlined" /> 
              <TextField style={{margin:"10px"}} id="outlined-basic" label="Description" variant="outlined" />
              <Button style={{margin:"5px",height:"45px"}} variant="contained">Add</Button>
               {/*==== input filed and add button ====*/}
            </CardContent>
         </Card> 
      </Container>
    </React.Fragment>
  );
}