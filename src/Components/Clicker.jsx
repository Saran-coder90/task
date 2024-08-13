import React from "react"
import { Button } from "@mui/material"
function Clicker(props){
   
    const {butValue} = props
     
   return (
    <Button variant='outlined' color='warning' sx={{
        color : '#f0c118',
        borderColor : "#f0c118",
        fontSize : "0.7em",
        letterSpacing : "3.5px",
        fontWeight : "bold",
        borderRadius : '0px'
      }}>{butValue}</Button>
   )
}
export default Clicker