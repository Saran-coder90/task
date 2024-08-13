import { Button } from "@mui/material"

function SendMessage(){
    return (
        <Button sx={{
            borderRadius : "1.2em",
            padding : "0.375rem 0.75rem",
            fontSize : "16px",
            color : 'black',
            backgroundColor : "#f3c623",
            textTransform : 'capitalize',
            letterSpacing : '1px',
            marginTop :"1em",
            "&:hover" : {
                borderStyle : "solid",
                borderColor : "#f3c623",
                color : "#f3c623",
                borderWidth : "1px"
            }
        }}>Send Message</Button>
    )
}
export default SendMessage