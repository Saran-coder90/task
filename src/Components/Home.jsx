import {Box, Button, Typography} from '@mui/material'
import Clicker from './Clicker'
function Home(props){
   const {value, index} = props

   
   return (
    <>
        <Box flex={1}>
            <img src={value.image_url} width={"100%"} height={"100%"}/>
        </Box>

        <Box bgcolor={'black'} flex={1} sx={{
            fontFamily : "Poppins, sans-serif",
            alignContent : "center",
            padding : {
                xs : "1em",
                md : "5em"
            }
        }}>
            <Box>
               <Typography variant='p' sx={{
                  color : "#666666",
                  fontFamily : "Poppins, sans-serif",
                  fontWeight : "bold",
                  fontSize : "12.5px",
                  letterSpacing : "2px"
               }}>
                 {value.title}
              </Typography>

              <Typography variant='h3' sx={{
                 color : "white",
                 fontFamily: "Abril Fatface, cursive",
               }}>
               {value.sub_title}
               </Typography>

               

              <Box  p={3} position={"relative"}>
                <Typography variant='p' sx={{
                  color : "#666666",
                  
                  
                  }}>
                  {value.para}
                </Typography>

                 <Box height={"50px"} width={'50px'} position={"absolute"} sx={
                    (index % 2 == 0) ?                  
                    {
                      borderLeftStyle : "solid",
                      borderLeftColor : "#f0c118",
                      left : '0px',
                      top : '30px'
                    }:{
                      borderLeftStyle : "solid",
                      borderLeftColor : "#f0c118",
                      right : '-45px',
                      top : '30px'
                    }
                    
                 }>

                 </Box>
              </Box>

              <Clicker butValue={'VIEW PORTFOLIO'}/>
            </Box>
        </Box>
    </>
   )

}
export default Home