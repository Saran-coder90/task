import { Grid, Box, Typography } from "@mui/material"
import Clicker from "./Clicker"

function Pricing(){
  
  const content = [{'image_url' : 'https://preview.colorlib.com/theme/mostudio/images/work-1.jpg', title : 'Model Photography', 'inner_content' : ['Package of 50', "Retouch", 'Semi Professional','12 MP', '14 Days'], price : '$50'},
    {'image_url' : 'https://preview.colorlib.com/theme/mostudio/images/work-2.jpg', title : 'Model Photography', 'inner_content' : ['Package of 50', "Retouch", 'Semi Professional','12 MP', '14 Days', "$50"], price : '$50'},
    {'image_url' : 'https://preview.colorlib.com/theme/mostudio/images/work-3.jpg', title : 'Model Photography', 'inner_content' : ['Package of 50', "Retouch", 'Semi Professional','12 MP', '14 Days', "$50"], price : '$50'},
    {'image_url' : 'https://preview.colorlib.com/theme/mostudio/images/work-4.jpg', title : 'Model Photography', 'inner_content' : ['Package of 50', "Retouch", 'Semi Professional','12 MP', '14 Days', "$50"], price : '$50'}  
  ]
  const subTitle = ['PHOTOS', 'PROCESSING', 'TYPE OF CAMERA', 'RESOLUTION', 'TERM', ]
  
  return (
    <Grid container sx={
        {
           width : {
              xs : '100%',
              md : '75%'
           },
           
        }}>
        {

            content.map((value, index)=>{
               return (
                <Grid height={"100vh"} key={index} item xs = {12} md = {3} sx={{
                    backgroundImage : `url(${value.image_url})`,
                    backgroundSize : 'cover',
                    backgroundPosition : "center",
                    display : "flex",
                    padding : {
                        xs : "2em",
                        md : "em"
                    }
                }}>
                    <Box sx={
                       {
                        display : "flex",
                        flexDirection : 'column',
                        justifyContent : "center"
                       }    
                    }>
                        <Typography variant="h5"  sx={{
                            color : "#FFFFFF",
                            fontWeight : 'bold',
                            fontFamily : 'poppins',
                            fontSize : '1.3em'
                        }}>
                            {value.title}
                        </Typography>

                        {
                            
                            subTitle.map((title_value, title_index)=>{
                                return (
                                    <Box key={title_index} mt={5}>
                                     <Typography variant="h6" sx={{
                                         color : "rgba(255, 255, 255, 0.6)",
                                         fontSize : '12px',
                                         fontFamily : 'poppins'
                                     }}>{title_value}</Typography>
                                     <Typography variant="p" sx={{
                                         color : "#FFFFFF", 
                                         fontFamily : "Poppins" ,
                                         fontSize : "14px"   
                                     }}>{value.inner_content[title_index]}</Typography>
                                     <Typography variant="p" sx={{
                                        fontWeight : "bold"
                                     }}>
                                       
                                     </Typography>
                                 </Box>
                                )
                            })
                        }
                        <Typography variant="h5" sx={{
                            fontWeight : 'bold',
                            fontSize : "30px",
                            color : "white",
                            fontFamily : 'font-family: "Poppins", Arial, sans-serif',
                            marginTop : "0.8em"
                        }}>
                            {value.price}
                        </Typography> 

                        <Box mt={2}>
                            <Clicker butValue = {'EXPLORE'}/> 
                        </Box>
                    </Box> 
                </Grid>
               )    
            })
        }
    </Grid>
  )
}
export default Pricing