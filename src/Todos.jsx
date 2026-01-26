import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import {useContext, useState, useEffect} from "react"
import {TodoContext} from './contexte/todoContext.jsx'
import AlertDialog from './AlertDialog.jsx'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from "@mui/material/TextField";





export default function Todos ({todo,isMobile}){

    const {todos, dispatch} = useContext(TodoContext)
    const [updatedTodo, setUpdatedTodo] = useState({
    title: todo.title,
    description: todo.description,
     });
    const [open, setOpen] = useState(false)
    const [showUpdateDialog,setShowUpdateDialog] = useState(false)
    
    //  HANDLE CHECKED
    function handleCheckClick(){

        dispatch({
            type:"Checked",
            payload :todo.id
        })
    }
    //==== HANDLE CHECKED===//

    // HANDLE EDIT

    function handleUpdate(){
         setShowUpdateDialog(prev=>!prev)
    }
    function handleUpdateConfirm(){
         dispatch({
            type:"update",
            payload :{
                id:todo.id,
                updatedTodo:updatedTodo

            }
         })
         setShowUpdateDialog(false);
    }
     //==== HANDLE EDIT====//


      // HANDLE DELETE
    function handleDeleteBtn(){
        setOpen(prev=>!prev)
    }

    function handleDeleteConfirm(){
        dispatch({
            type:"delete",
            payload:todo.id
        })

        setOpen(prev=>!prev)
    }
   //==== HANDLE DELETE ====//
    
    return (
            
            <Card sx={{ width:"90%" , marginTop:"5px",display:"flex", alignItems:"center", justifyContent:"around", padding:"5px", border:"solid 1px gray",flexDirection:isMobile?"column":"row"}}>

                {/*DELETE DIALOG  */}
                <Dialog
                        open={open}
                        onClose={false}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description">
                        <DialogTitle id="alert-dialog-title">
                            Delete
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                           Are you sure you want to delete the task?
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={()=>{setOpen(false)}}>
                                cancel
                            </Button>
                            <Button autoFocus onClick={handleDeleteConfirm}>
                                confirm
                            </Button>
                        </DialogActions>
                    </Dialog>
                {/*===== DELETE DIALOG ===== */}

                 {/* UPDATE DIALOG */}
                <Dialog
                    open={showUpdateDialog}
                    onClose={()=>{setShowUpdateDialog(false)}}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Edit </DialogTitle>
                    <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Title"
                        fullWidth
                        variant="standard"
                        value={updatedTodo.title}
                        onChange={(e) => {
                        setUpdatedTodo({ ...updatedTodo, title: e.target.value });
                        }}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Description"
                        fullWidth
                        variant="standard"
                        value={updatedTodo.description}
                        onChange={(e) => {
                        setUpdatedTodo({ ...updatedTodo, description: e.target.value });
                        }}
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={()=>{setShowUpdateDialog(false)}}>cancel</Button>
                    <Button autoFocus onClick={handleUpdateConfirm}>
                        confirm
                    </Button>
                    </DialogActions>
                </Dialog>
                {/* === UPDATE DIALOG */}

                {/* CARD CONTENT WITHE ICONbUTTON */}
                <CardContent sx={{display:"flex" , flexDirection:"column" ,justifyContent :"start", alignItems:"start",width:"70%"}} >
                    <Typography variant={isMobile?"h6":"h5"} sx={{fontWeight:"bold", textDecoration:todo.isChecked?"line-through":"none"}}  >
                        {todo.title}
                    </Typography>
                    <Typography variant={isMobile?"h6":"h5"} sx={{textDecoration:todo.isChecked?"line-through":"none"}}>
                        {todo.description}
                    </Typography>
                </CardContent>

                <Divider orientation={isMobile?"horizontal":"none"} flexItem sx={{borderColor:"gray"}}/>

                <Stack direction="row" spacing={1} sx={{width:isMobile?"100%":"30%", display:"flex", justifyContent:"center"}}>
                    <IconButton sx={{color:todo.isChecked?"white":"green",background:todo.isChecked?"green":"white"}} aria-label="check" onClick={handleCheckClick}>
                      <CheckIcon/> 
                    </IconButton>
                    <IconButton sx={{color:"blue"}} aria-label="edit" onClick={handleUpdate}>
                      <EditIcon/> 
                    </IconButton>
                    <IconButton sx={{color:"red"}} aria-label="delete" onClick={handleDeleteBtn}>
                        <DeleteIcon />
                    </IconButton>
                    {/*==== CARD CONTENT WITHE ICONbUTTON ====*/}
                </Stack>
                
               
            </Card>
         )
        
         

}