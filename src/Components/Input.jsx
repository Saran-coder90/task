import React from "react"
import { styled } from "@mui/material"

const CusInput = styled('input')({
    fontFamily : "Poppins, Arial, sans-serif",
    borderStyle : 'solid',
    borderColor : '#82808061',
    borderWidth : '1px',
    borderRadius : '8px',
    outline : "none",
    padding : '1em',
    backgroundColor : 'transparent',
    color : "rgba(255, 255, 255, 0.4)",
    fontWeight : 'bold',    
    marginTop : '1em',
    fontSize : '0.9em',
    marginBottom : '1.2em',
    width : '80%'
})
function Custominput(){
   return (
    <CusInput placeholder="Enter Email Address" ></CusInput>
   )
}
export default Custominput