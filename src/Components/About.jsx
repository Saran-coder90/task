import { Grid, Typography, Box } from "@mui/material"
import { flexbox, height } from "@mui/system"

function About(){

    const content = {
        overall_img : 'https://preview.colorlib.com/theme/mostudio/images/about.jpg',
        description : 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
        intro : "Hello! I'm Saran White the CEO of a Mostudio Photography",
        profiles : [
             {
                profile_img : "https://preview.colorlib.com/theme/mostudio/images/team-1.jpg",
                profile_name : 'John Doe',
                profile_role : 'Photographer'
             },
             {
                profile_img : "https://preview.colorlib.com/theme/mostudio/images/team-2.jpg",
                profile_name : 'John Flex',
                profile_role : 'Photographer'
             },
             {
                profile_img : 'https://preview.colorlib.com/theme/mostudio/images/team-3.jpg',
                profile_name : 'John Flex',
                profile_role : 'Photographer'
             }
        ]
    }

    const {overall_img, description, intro, profiles} = content

 return(
      <Grid container height={'100vh'} sx={
        {
           width : {
              xs : '100%',
              md : '75%'
           }
        }
       } bgcolor={'black'}>
          <Grid item xs = {12} md = {6} sx={
            {
                backgroundImage : `url(${overall_img})`,
                backgroundSize : 'cover',
                backgroundPosition : "center",
                height : '100%',
                width : '100%'
            
            }
          }></Grid>
          <Grid item xs = {12} md = {6} display={"flex"} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} sx={{padding : {
            xs : "1em",
            md : '4em'
          }}
          } bgcolor={"black"}>
                  <Typography variant="h3" sx={{
                                color : "white",
                                fontFamily: "Abril Fatface, cursive",
                                fontSize : '2.5em',
                                 }}>
                     {intro}
                 </Typography>


                <Box mt={4}>
                   <Typography variant='p' sx={{
                     color : "#666666",
                    }}>
                    {description}
                </Typography>
                </Box>

                <Box display={"flex"}   textAlign={'center'} gap={8} mt={5} sx={{
                    flexDirection : {
                        xs : 'column',
                        md : "row"
                    }
                }}>
                  {
                    profiles.map((value, index)=>{
                       return (
                        <Box key={index}>
                        <img src = {value.profile_img} style={{width : "100px", height : "100px", borderRadius : "100%"}}/>
                        <br />
                        <Typography variant="p" sx={{
                            color : "#FFFFFF",
                            fontWeight : 'bold'
                        }}>
                            {value.profile_name}    
                        </Typography>
                        <br />
                        <Typography variant="p" sx={{
                            color : '#666666',
                            fontSize : '12px'
                        }}>
                            {value.profile_role}
                        </Typography>

                       </Box>
                       )
                    })
                  }
               </Box>
          </Grid>
      </Grid>
 )
}

export default About 