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
            Development in Machine Learning algorithms has led to early detection and prediction of fatal diseases.  Certain websites help patients to identify such diseases. Our software bridges the needs of patients by predicting fatal diseases like brain tumour, diabetes mellitus, lung cancer and cardiovascular (heart) diseases for the patient
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