import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/GridLegacy';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {useContext,useState} from "react"
import {TodosContext} from '../context/todosContext.js';
import '../App.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Todo({todo,handleCheck}){
    const [showDeleteDialog, setShowDeleteDialog] = useState(false)
    const [showUpdateDialog, setShowUpdateDialog] = useState(false)
    const [updatedTodo,setUpdatedTodo] = useState({title:todo.title, details:todo.details})
    const {todos , setTodos} = useContext(TodosContext)

    
    // event handlers
    function handleCheckClick(){
        const updatedTodos =todos.map((t)=>{
        if(t.id ==todo.id){
          t.isCompleted =! t.isCompleted
        }
        
        return t;
      })
      setTodos(updatedTodos)
       localStorage.setItem("todos",JSON.stringify(updatedTodos))
    }

    function handleDeleteClick(){
        setShowDeleteDialog(true)
    }

    function handleDeleteDialogClose(){
        setShowDeleteDialog(false)
    }

    function handleDeleteConfirm (){
        const updatedTodos =todos.filter((t)=>{
            return t.id != todo.id
        })
        setTodos(updatedTodos)
         localStorage.setItem("todos",JSON.stringify(updatedTodos))
    }

    function handleUpdateConfirm (){
        const updatedTodos =todos.map((t)=>{
            if(t.id==todo.id){
                return {...t,title:updatedTodo.title, details: updatedTodo.details};
            }else{
                return t
            }
        })

        setTodos(updatedTodos)
         localStorage.setItem("todos",JSON.stringify(updatedTodos))
        setShowUpdateDialog(false)
    }

    function handleUpdateClose(){
        setShowUpdateDialog(false)
    } 
    function handleUpdateClick(){
        setShowUpdateDialog(true)
    }

    // event handlers

    
    return(
        <>
        {/* delete modal */}

         <Dialog
         style={{direction:"rtl"}}
            onClose={handleDeleteDialogClose}
            open={showDeleteDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
         >
        <DialogTitle id="alert-dialog-title">
          هل انت متاكد من حدف المهمة
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           لا يمكن التراجع عن الحدف
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose} >اغلاف</Button>
          <Button 
            onClick={handleDeleteConfirm}
            autoFocus>
            نعم قم بالحدف
          </Button>
        </DialogActions>
      </Dialog>
        {/*=== delete modal ====*/}
        {/* UPDATE DIALOG */}
         <Dialog
         style={{direction:"rtl"}}
            onClose={handleUpdateClose}
            open={showUpdateDialog}
            // onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
         >
        <DialogTitle id="alert-dialog-title">
          تعديل المهمة
        </DialogTitle>
        <DialogContent>
          <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="عنوان المهمة"
              fullWidth
              variant="standard"
              value={updatedTodo.title}
              onChange={(e)=>{
                setUpdatedTodo({...updatedTodo, title:e.target.value})
              }}
            />
             <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="التفاصيل"
              fullWidth
              variant="standard"
              value={updatedTodo.details}
              onChange={(e)=>{
                setUpdatedTodo({...updatedTodo, details:e.target.value})
              }}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateClose} >اغلاف</Button>
          <Button 
            onClick={handleUpdateConfirm}
            autoFocus>
            تأكيد
          </Button>
        </DialogActions>
      </Dialog>

        {/*=== UPDATE DIALOG ===*/}

            <Card className="todoCard" sx={{ minWidth: 275,background:"#283593", color:"white",marginTop:5 }} >
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Typography variant="h5" sx={{textAlign:"right", textDecoration: todo.isCompleted?"line-through":"none"}} >
                                {todo.title}
                            </Typography>
                            <Typography variant="h6" sx={{textAlign:"right"}} >
                                {todo.details}
                            </Typography>
                        </Grid>
                        <Grid item xs={4} display="flex" justifyContent="space-around" alignItems="center" >
                            <IconButton 
                            onClick={()=>{
                                handleCheckClick()
                            }}
                             className="iconButton" 
                             aria-label="delete" 
                             style={{
                                color: todo.isCompleted ?"white":"#8bc34a", 
                                background: todo.isCompleted ?"#8bc34a":"white",
                                border:"solid #8bc34a 3px"}}>
                                <CheckIcon />
                            </IconButton>

                            <IconButton
                               className="iconButton" 
                               aria-label="delete" 
                               style={{
                                 color:"#1769aa",
                                 background:"white",
                                 border:"solid #1769aa 3px"}}
                                  onClick={handleUpdateClick}
                                 >
                                <ModeEditOutlineOutlinedIcon />
                            </IconButton>

                              <IconButton
                               className="iconButton" 
                               aria-label="delete" 
                               style={{
                                 color:"#b23c17",
                                 background:"white",
                                 border:"solid #b23c17 3px"}}
                                 onClick={handleDeleteClick}
                                 >
                                <DeleteOutlineOutlinedIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                   

                </CardContent>                                                              
            </Card>
            </>
    )
}