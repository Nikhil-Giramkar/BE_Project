import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import { Button, Grid, Typography } from '@mui/material';
import React from "react";
import './App.css';
import Nav from './Navbar';
const MainPage = () => {
    return (  
        <>
        
        <Nav noLinks={1} pd={1.6}/>
        <Grid container className="main" style={{width:"60%"}}>
            <Grid item  className="obg" style={{backgroundColor:"rgb(24, 16, 16)",width:"100%",
            height:"100%",opacity:"0.7" ,borderLeft:"6px solid cyan"
            ,borderRight:"6px solid rgb(243, 7, 85)"}}>    
            </Grid>
        <div className="btext">
                     <Typography variant="h3"  
                     style={{fontSize:"3em", fontFamily:"Nunito" }}>
                          ML BASED HEALTH GUIDE
                      </Typography>
            <p style={{marginTop:"1em"}}> 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries, but also the leap
             into electronic typesetting, remaining essentially unchanged. 
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
             and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

      <Button variant="contained" 
      startIcon={<LoginSharpIcon/>} style={{marginTop:"2em" , marginLeft:"40%" }}>
           Login
    </Button>
        </div>
    </Grid>
</>

    );
}
export default MainPage;