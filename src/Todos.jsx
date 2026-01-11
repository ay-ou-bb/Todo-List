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




export default function Todos (){
    return (
        <Card sx={{ width:"90%" , marginTop:"5px",display:"flex", alignItems:"center", justifyContent:"around", padding:"5px"}}>
            <CardContent sx={{display:"flex" , flexDirection:"column" ,justifyContent :"start", alignItems:"start",width:"70%" }} >
                <Typography variant="h4" >
                   TITLE
                </Typography>
                <Typography variant="h5">
                    description 
                </Typography>
            </CardContent>
                <Stack direction="row" spacing={1} sx={{width:"30%"}}>
                    <IconButton aria-label="check">
                      <CheckIcon/> 
                    </IconButton>
                    <IconButton aria-label="edit">
                      <EditIcon/> 
                    </IconButton>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Stack>
        
        </Card>
    )
}