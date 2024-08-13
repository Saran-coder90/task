import "./App.css";
import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import "@fontsource/roboto";
import Home from "./Components/Home";
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Pricing from "./Components/Pricing";
import { useState } from "react";



function App() {
  const obj = [
    {
      image_url:
        "https://preview.colorlib.com/theme/mostudio/images/work-1.jpg",
      title: "PORTRAIT",
      sub_title: "Black & Gold Paint Face",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
      image_url:
        "https://preview.colorlib.com/theme/mostudio/images/work-2.jpg",
      title: "NATURE",
      sub_title: "Black & Gold Paint Face",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.9 ",
    },
    {
      image_url:
        "https://preview.colorlib.com/theme/mostudio/images/work-3.jpg.webp",
      title: "Nature",
      sub_title: "Coal",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
      image_url:
        "https://preview.colorlib.com/theme/mostudio/images/work-1.jpg",
      title: "PORTRAIT",
      sub_title: "Black & Gold Paint Face",
      para: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
  ];
  const [isNavbar, setNavabar] = useState(false)
  
    const handleNavbar = function(){
      setNavabar(!isNavbar)
    }
  

  return (
    <BrowserRouter>
    <Box onClick={handleNavbar}  sx={{
      position : "absolute",
      zIndex : 1,
      display : {
        xs : 'block',
        md : "none"
      },
      top: "20px",
      left : "20px" 
    }}>
      {
        [1, 1, 1].map((input_value, input_index)=>{
          return (<Box key={input_index} sx={
            {
              borderTopStyle : "solid",
              borderTopWidth : "1px",
              borderColor : "white",
              borderWidth : "2px",
              width : "25px",
              marginTop : "6px",
              cursor : "pointer",
              backgroundColor : "red",
            }
          }></Box>)
        })
      }
    </Box>

    <Box display={"flex"} justifyContent={"center"} bgcolor={'black'}>
      <Box position={'absolute'} sx={{
      

    }}>
      {
        [1, 1, 1].map((input_value, input_index)=>{
          return (<Box key={input_index} sx={
            {
              borderTopStyle : "solid",
              borderTopWidth : "1px",
              borderColor : "white",
              borderWidth : "1px"
            }
          }></Box>)
        })
      }
    </Box>
      <Box
        flex={1}
        sx={{
          display: {
            xs : isNavbar?"block":"none",
            md: "block",
          },
          
          
        }}
      >
        <Navbar handleNavbar={handleNavbar}/>
        
      </Box>

      <Box flex={3}>
        {obj.map((value, index) => {
          return (
            <Box
              key={index}
              display={"flex"}
              sx={
                index % 2 == 0
                  ? {
                      flexDirection: {
                        xs: "column",
                        md: "row",
                      },
                    }
                  : {
                      flexDirection: {
                        xs: "column",
                        md: "row-reverse",
                      },
                      textAlign : 'right'
                    }
              }
            >
             <Routes>
                <Route path="/" element = { <Home value={value} index = {index}/>}/>
             </Routes>
            </Box>
          );
        })}
      </Box>
      <Routes>
                <Route path="/gallery" element = { <Gallery/>}/>
                <Route path="/about" element = { <About/>}/>
                <Route path="/pricing" element = { <Pricing/>}/>
                <Route path="/contact" element = { <Contact/>}/>
      </Routes>
    </Box>
    </BrowserRouter>
  );
}

export default App;
