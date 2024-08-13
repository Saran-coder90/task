import { colors, Typography, Box } from "@mui/material"
import React from "react"
function Copyright(){
   
    return (
        <Box>
            <Typography variant="p" sx={
            {
                color : 'rgba(255, 255, 255, 0.2)',
            }
          }>
            Copyright ©2024 All rights reserved | This template is made with  by <span style={{
                color : "rgba(255, 255, 255, 0.7)"
            }}>Colorlib.com</span>
           </Typography>
    
        </Box>
    )
}
export default Copyright