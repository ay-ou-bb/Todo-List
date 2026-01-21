import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';






export default function Todos ({todo}){

    return (
            <Card sx={{ width:"90%" , marginTop:"5px",display:"flex", alignItems:"center", justifyContent:"around", padding:"5px", border:"solid 1px gray"}}>
            <CardContent sx={{display:"flex" , flexDirection:"column" ,justifyContent :"start", alignItems:"start",width:"70%"}} >
                <Typography variant="h5" sx={{fontWeight:"bold"}}>
                    {todo.title}
                </Typography>
                <Typography variant="h6">
                    {todo.description}
                </Typography>
            </CardContent>
                <Stack direction="row" spacing={1} sx={{width:"30%"}}>
                    <IconButton sx={{color:"green"}} aria-label="check">
                      <CheckIcon/> 
                    </IconButton>
                    <IconButton sx={{color:"blue"}} aria-label="edit">
                      <EditIcon/> 
                    </IconButton>
                    <IconButton sx={{color:"red"}} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Stack>
        
        </Card>
         )
        
         

}