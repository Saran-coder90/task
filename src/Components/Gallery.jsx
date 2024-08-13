import { Grid, Box, Typography } from "@mui/material"
import Clicker from "./Clicker"

const obj  = [{'image_url' : 'https://preview.colorlib.com/theme/mostudio/images/work-1.jpg', title : 'PORTRAIT', sub_title : 'Black & Gold Paint Face'},
   {'image_url' : 'https://preview.colorlib.com/theme/mostudio/images/work-2.jpg', title : 'Portrait', sub_title : 'Black & Gold Paint Face'},
   {'image_url' : 'https://preview.colorlib.com/theme/mostudio/images/work-3.jpg', title : 'Portrait', sub_title : 'Black & Gold Paint Face'},
   {'image_url' : 'https://preview.colorlib.com/theme/mostudio/images/work-4.jpg', title : 'Portrait', sub_title : 'Black & Gold Paint Face'},
   {'image_url' : 'https://preview.colorlib.com/theme/mostudio/images/work-5.jpg', title : 'Portrait', sub_title : 'Black & Gold Paint Face'},
   {'image_url' : 'https://preview.colorlib.com/theme/mostudio/images/work-6.jpg', title : 'Portrait', sub_title : 'Black & Gold Paint Face'}
]

function Gallery(){
   
   return (
      
           <Grid container height={'100vh'}  sx={
            {
               width : {
                  xs : '100%',
                  md : '75%'
               }
            }
           } bgcolor={'black'}>
                 {
                  obj.map((value, index)=>{
                     return (
                     
                        <Grid key={index} item xs={12} md={4} sx={
                           {
                              backgroundImage : `url(${value.image_url})`,
                              backgroundSize : 'cover',
                              backgroundPosition : 'center',
                              width : '100%',
                              height : '100%',
                              display : "flex",
                              justifyContent : 'center',
                              alignItems : 'center',
                              '&:hover .inner-div':{
                                   opacity : 1,
                                   color : "white"
                              }, 
                           }
                        }>
                        <Box className='inner-div' sx={{
                           opacity : 0
                        }} p={6}>
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
                                fontSize : '2.5em',
                                marginTop : '0.2em',
                                marginBottom : '0.8em'
                                 }}>
                                {value.sub_title}
                             </Typography>

                             <Clicker butValue = {'VIEW PORTFOLIO'}/> 
                        </Box>
                                             
                     </Grid>
                     )
                  })
                 }
           </Grid>
      
   )
}
export default Gallery