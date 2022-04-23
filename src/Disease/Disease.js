import { Grid } from '@mui/material';
import React from 'react';
import "../App.css";
import Brain from "../images/brain.jpg";
import Diab from "../images/diab.jpg";
import Heart from "../images/heart.jfif";
import Lung from "../images/lung.jfif";
import MedCard from "../MedicalCard";
import NavMod from '../NavMod/NavMod';
const Disease = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleChange = (event) => {
//     setAuth(event.target.checked);
//   };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [birthName, setBirthName] = React.useState(localStorage.getItem("birthName"));
  const [tok, setTok] = React.useState(localStorage.getItem("token"));
    return ( 


        <Grid container className="disease" >  
          <NavMod title={"DOCTOR__PREDICTOR"} n={birthName}/>
        <Grid container direction="column" className="disease-x" style={{marginTop:"2.5em"}}>
            <Grid  container direction="row" justifyContent="space-evenly" style={{marginBottom:"2em"}}>
                <Grid item >
                    <MedCard bName={birthName} tok={tok} btname={"Know Lung Status"} content={"The growth of cancerous cells in lungs is called lung cancer.Lung cancer is a disease where cells in the lungs multiply uncontrollably. If the prediction of lung cancer initial stage is made at an early stage then many lives can be saved and accurate prediction also can help the doctors start their treatment"} head={"Lung Cancer Detection"} im={Lung} url={"/disease/lung"}/>
                </Grid>
                <Grid item >
                    <MedCard bName={birthName} tok={tok} btname={"Know Diabetes Status"} content={"Diabetes is considered as one of the deadliest and chronic diseases which causes an increase in blood sugar. Many complications occur if diabetes remains untreated and unidentified. The tedious identifying process results in visiting of a patient to a diagnostic center and consulting doctor. But the rise in machine learning approaches solves this critical problem"} head={"Diabetes Detection"} im={Diab} url={"/disease/diabetes"}/>
                </Grid>
            </Grid>          

            <Grid container direction="row" justifyContent="space-evenly">
                <Grid item >
                    <MedCard bName={birthName} tok={tok}  btname={"Know Heart Status"} content={"Heart disease is one of the biggest cause for morbidity and mortality among the population of the world. Prediction of cardiovascular disease is regarded as one of the most important subject in the section of clinical data analysis. The amount of data in the healthcare industry is huge. Data mining turns the large collection of raw healthcare data into information that can help to make informed decision and prediction."} head={"Heart Disease Detection"} im={Heart} url={"/disease/heart"}/>
                </Grid>
                <Grid item >
                    <MedCard bName={birthName} tok={tok} btname={"Know Brain Status"} head={"Brain Tumour Detection"} content={"Heart disease is one of the biggest cause for morbidity and mortality among the population of the world. Prediction of cardiovascular disease is regarded as one of the most important subject in the section of clinical data analysis. The amount of data in the healthcare industry is huge. Data mining turns the large collection of raw healthcare data into information that can help to make informed decision and prediction."} im={Brain} url={"/disease/brain"}/>
                </Grid>
            </Grid>       
            </Grid>
        </Grid>
        

     );
}
 
export default Disease;