import React from "react"
import { Box, Icon, Input, Typography } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import SendMessage from "./SendMessage";

const inputStyles = {
     backgroundColor : "black",
     borderbottomStyle : 'solid',
     borderWidth : "0px",
     borderBottomWidth : "1px",
     outline : "none",
     color : 'rgba(255, 255, 255, 0.7)',
     fontWeight : "700",
     paddingTop : "1em",
     paddingBottom : "1em",
     width : "90%"
    }
const inputContent = [
    {title : 'SUBJECT', placeholder : "Subject"},
    {title : 'MESSAGE', placeholder : 'Message'}
]

function Contact(){

    const content = [
        {icon : <LocationOnIcon/>, description : '198, New York NY 10016'},
        {icon : <PhoneIcon/>, description : '+91 6374056047' },
        {icon : <EmailIcon/>, description : 'info@yoursite.com'},
        {icon : <PublicIcon/>, description : "yoursite.com"}
    ]

    const title_content = ['Address', 'Phone', 'Email', 'Website']
    return (
        <Box sx={
            {
               width : {
                  xs : '100%',
                  md : '75%'
               },
               display : "flex",
               flexDirection : {
                xs : "column-reverse",
                md : "row"
               },
               height : {
                md : "100vh"
               }
            }}>
             <Box flex = {1.5} bgcolor={'#f3c623'} p={5} >
                <Typography variant="h4">
                   Let's get in touch
                </Typography>
                <Box mt={4}>
                  <Typography variant="p">
                    We're open for any suggestion or just to have a chat
                  </Typography>
                </Box>

                <Box mt={5}>
                    {
                        content.map((each_obj, index)=>{
                           return (
                            <Box display={'flex'} gap={3} mt={2}>
                              <Box sx={{
                                borderStyle : "solid",
                                borderWidth : "1px",
                                borderColor : '#6c757d57',
                                width : "50px",
                                height : "50px",
                                borderRadius : "50%",
                                display : 'flex',
                                justifyContent : 'center',
                                alignItems : 'center'
                              }}>
                                {each_obj.icon}
                              </Box>
                              <Box display={'flex'} alignItems={'center'}>
                                <Typography variant="p">{`${title_content[index]} : ${each_obj.description}`}</Typography>
                              </Box>
                           </Box>   
                           )  
                        })
                    }
                </Box>
            </Box>

            <Box flex = {3} bgcolor={'black'} p={4}>
                 <Typography variant="h4" color={"white"} fontWeight={'bold'} fontFamily={"Poppins, Arial, sans-serif"} >
                    GET IN TOUCH
                 </Typography>  

                 <Box sx={{
                    display : {
                        xs : "block",
                        md : "flex"
                    }
                 }}  gap={3} mt={6}>
                    <Box width={"100%"}>
                         <Typography variant="label" color={'rgba(255, 255, 255, 0.4)'} fontFamily={"Poppins, Arial, sans-serif"} fontSize={'13px'} fontWeight={'600'}>
                            FULL NAME
                         </Typography>
                         <br/>
                         <input type="text" style={inputStyles}  placeholder="Name"/>
                    </Box>

                    <Box width={"100%"}>
                         <Typography variant="label" color={'rgba(255, 255, 255, 0.4)'} fontFamily={"Poppins, Arial, sans-serif"} fontSize={'13px'} fontWeight={'600'}>
                            EMAIL ADDRESS
                         </Typography>
                         <br/>
                         <input type="text" style={inputStyles} placeholder="Email"/>
                    </Box>
                 </Box>

                 {
                    inputContent.map((each_obj, index)=>{
                        return (
                        <Box width={"100%"} mt={2}>
                          <Typography variant="label" color={'rgba(255, 255, 255, 0.4)'} fontFamily={"Poppins, Arial, sans-serif"} fontSize={'13px'} fontWeight={'600'}>
                            {each_obj.title}
                          </Typography>
                          <br/>
                        {index != 1 ? <input type="text" style={inputStyles}  placeholder={each_obj.placeholder}/> : <textarea type="text" style={inputStyles}  placeholder={each_obj.placeholder}/>}
                       </Box>
                        )
                    })
                 } 
             <SendMessage/>    
            </Box>   
                     
        </Box>
    )
}
export default Contact