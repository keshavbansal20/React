import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
// import IconButton from '@material-ui/core/IconButton';
import { IconButton } from '@material-ui/core';

function Buttons() {
    return (
        <div>
            <h2>Buttons</h2>
            <Button variant="contained">Hello</Button>
            <Button variant="outlined">Hello</Button>
            <Button variant="text">Hello</Button>
            <h2>Color & Event Listeners</h2>
            <Button variant="contained" style={{marginRight:"8px"  , backgroundColor:"lightgreen"}}>Hello</Button>
            <Button variant="outlined" color="secondary" href="https://material-ui.com/api/button/">Hello</Button>
            <Button variant="text" color="primary"
                onClick={()=>{alert("Hello")}}>Hello</Button>
            <h2>Icons inside Buttons</h2>
            <Button color="primary" variant="contained" style={{marginRight:"8px"}} startIcon={<SendIcon></SendIcon>}>Send</Button>
            <Button variant="outlined" color="secondary"  endIcon={<SendIcon></SendIcon>}>Hello</Button>
            
            <h2>Size</h2>
            <Button color="primary" variant="contained" style={{marginRight:"8px"}} startIcon={<SendIcon></SendIcon>} size="large">Send</Button>
            <Button variant="outlined" color="secondary"  endIcon={<DeleteIcon></DeleteIcon>} size="small">Delete</Button>

            <h2>Icons</h2>
            <IconButton>
            <SendIcon></SendIcon>
            </IconButton>
            <IconButton>
            <DeleteIcon onClick={()=>{
                alert("Delete")
            }}> 
                </DeleteIcon>
            </IconButton>
    


        </div>
    )
}

export default Buttons
