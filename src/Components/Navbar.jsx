import { Box, ListItem, Typography, List, Input, AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Custominput from "./Input";
import Copyright from "./Copyright";
import {Link} from 'react-router-dom'

const StyledSpan = styled("span")({
  color: "#FFFFFF",
  fontSize : '15px',
  fontWeight : "600",
  "&:hover": {
    color: "#eebb20",
    borderBottomStyle: "solid",
    borderBottomColor: "#eebb20",
    borderWidth : '2.4px',
    cursor: "pointer",
  },
});
const NormalSpan = styled("span")({
  color: "#eebb20",
  borderBottomStyle: "solid",
  borderBottomColor: "#eebb20",
  cursor: "pointer",
  fontWeight : "600"
});

function Navbar(props) {

  const {handleNavbar} = props
  const listItems = ["HOME", "GALLERY", "ABOUT", "PRICING", "CONTACT"];
  const paths = ['/', '/gallery', '/about', '/pricing', '/contact']
  const [clicked, makeClicked] = useState([true, false, false, false, false])

  function makeSelected(selectedIndex){

        console.log(clicked)
        const updatedList = clicked.map((value, trackedIndex)=>{
          if(selectedIndex == trackedIndex){
            handleNavbar()
             return true
          }
          else{
              return false
          }
          
        }) 

        makeClicked(updatedList)
  }

  return (
    <Box
      p={3}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      position={"fixed"}
      height={"95vh"}
      bgcolor={'black'}
    sx={{
      width : {
        xs : "50%",
        md : "22%"
      },
    }}>
      <Box position={"relative"}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Abril Fatface, cursive",
            color: "White",
            backgroundImage:
              "url(https://preview.colorlib.com/theme/mostudio/images/bg_1.jpg)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "cover",
            backgroundPosition: "center",
            fontSize : {
              xs : "2em",
              md : '2.5em',
              lg : '4em'
            }
          }}
        >
          Mostudio
        </Typography>

        <Box>
          <List
            sx={{
              marginTop: "3em",
              padding: "0px",
            }}
          >
            {listItems.map((value, index) => {
              return (
                <ListItem key={index}>
                  {index == 0 ? (
                    <Link to = {paths[index]} style={{textDecoration : "none"}}><NormalSpan onClick={()=> makeSelected(index)} sx={clicked[index] ? {color: "#eebb20",
                      borderBottomStyle: "solid",
                      borderBottomColor: "#eebb20",
                      cursor: "pointer",
                      fontWeight : "600"}:{
                        color : "#FFFFFF",
                        fontSize : '15px',
                        fontWeight : "600",
                        borderBottomWidth : "0px"}}>{value}</NormalSpan></Link>
                  ) : (
                    <Link to = {paths[index]} style={{textDecoration : "none"}}><StyledSpan onClick={()=> makeSelected(index)} sx={clicked[index] ? {color: "#eebb20",
                      borderBottomStyle: "solid",
                      borderBottomColor: "#eebb20",
                      cursor: "pointer",
                      fontWeight : "600"}:{color: "#FFFFFF",
                        fontSize : '15px',
                        fontWeight : "600"}}>{value}</StyledSpan></Link>
                  )}
                </ListItem>
              );
            })}
          </List>
        </Box>
        
      </Box>

      <Box>
        <Typography
          variant="h2"
          color={"#808182"}
          fontWeight={"bold"}
          fontSize={"0.9em"}
        >
          SUBSCRIBE FOR NEWSLETTER
        </Typography>
        <Custominput />
        <Copyright />
      </Box>

      <Box
          position={"absolute"}
          sx={{
            top: "0px",
            right: "0px",
            height:"100vh"
          }}
        >
          <img
            src="https://preview.colorlib.com/theme/mostudio/images/aside.png"
            alt=""
          />
        </Box>
    </Box>
  );
}
export default Navbar;
