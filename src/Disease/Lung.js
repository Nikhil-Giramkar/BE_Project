import { Button, Grid, TextField, Typography } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import '../App.css';
import { LungCancer } from "../DataService/Service";
import Result from "../Dialog/Result";
import NavMod from '../NavMod/NavMod';

const Lung = () => {



const arr = 
[
    {label:"Gender" , key:"Gender"},
    {label:"Smoking" , key:"Smoking"},
    {label:"Yellow_fingers", key:"Yellow_Fingers"},
    {label:"Anxiety" , key:"Anxiety"},
    {label:"Peer_pressure" , key:"Peer_Pressure"},
    {label:"Chronic disease" , key:"Chronic_Disease"},
    {label:"Fatigue" , key:"Fatigue"},
    {label:"Allergy" , key:"Allergy"},
    {label:"Wheezing" , key:"Wheezing"},
    {label:"Alcohol consuming" , key:"Alcohol_Consuming"},
    {label:"Coughing" , key:"Coughing"},
    {label:"Shortness of breath" ,key:"Shortness_Of_Breath"},
    {label:"Swallowing difficulty" , key:"Swallowing_Difficulty"},
    {label:"chest pain" , key:"Chest_Pain"},
    {label:"button"}
]
// const arr = 
// [
//     {label:"Gender" , key:"gender"},
//     {label:"Smoking" , key:"smoking"},
//     {label:"Yellow", key:"yellow"}
// ]
const cities = [
 'Pune',
 'Thane',
 'Kolhapur',
 'Jalgaon',
 'Banglore',
 'Mumbai',
 'Delhi',
 'Hyderabad',
 'Noida',
 'Gurgaon',
 'Chennai',
 'Nashik',
 'Gurgaon',
 'Lucknow'

]
const [fieldData, setFieldData] = useState({})
const history = useHistory();
const [age, setAge] = useState(0)
const [openDialog, setOpenDialog] = useState(false)
const [result, setResult] = useState(1)
const setDialog = () => setOpenDialog(true);

// const [tok, setTok] = React.useState(localStorage.getItem("token"));
const [bName, setBName] = React.useState(localStorage.getItem("birthName"));
//console.log(tok)
const handleResult =async (e) => 
{
    let tok = localStorage.getItem("token")
    let Data = new FormData();
    for (const t in fieldData ) 
    {
        Data.append(t,fieldData[t]);
        console.log(`${t}: ${fieldData[t]}`);
    }
    const res = await LungCancer(Data , tok)
    if(res==0){
        history.push("/home")
    }
     setResult(res["Lung Cancer"][0])
    console.log(result)
    setOpenDialog(true)
    //console.log(res["Lung Cancer"][0])
};
useEffect(() => {
    console.log(fieldData)
    console.log(age)
  }, [fieldData])
    return ( 
        <Grid container className="Medform">
        {openDialog && <Result result={result} acc={"97"} title={"Lung Cancer"}/>}   

           <NavMod title={"Lung Cancer Prediction"} n={bName} />
              
            <Grid container direction="column" >  
            <Typography variant="h6" id="l1" style={{margin:"-0.9em auto",fontSize:"1.2em",fontFamily:"Nunito"}}>
                  Please select all fields properly and then click on submit
            </Typography>
            <Grid container direction="column" style={{ margin:"2.3em auto",  height:"40%",width:"53%"}}>
            <TextField id="outlined-basic" type={"number"} label="Age" style={{marginTop:"1em",width:"15em"}} defaultValue={fieldData['Age']? fieldData['Age'] : ""}
             onChange={e=> setFieldData({...fieldData,['Age']:parseInt(e.target.value)})} variant="outlined" />
            
            <TextField
                    id="outlined-select-currency"
                    select
                    style={{marginTop:"1em",width:"15em"}}
                    label='City'       
                          
                    defaultValue={fieldData['City']? fieldData['City'] : ""}
                    onChange={e=> setFieldData({...fieldData,['City']:e.target.value})}
                    >
                        
                        {
                            cities.map(item=>
                                <MenuItem value={item} >
                                 {item}
                                </MenuItem>
                            )
                        }
                        

                    </TextField>
            
            {
                arr.map((data)=>
                data.label=="button" ? 
                (
                    <Button variant="contained" onClick={handleResult} style={{marginTop:"1em",width:"15em"}}  size="large">Submit</Button>    
                )
                : 
                (
                    <TextField
                    id="outlined-select-currency"
                    select
                    style={{marginTop:"1em",width:"15em"}}
                    label={data.label}       
                          
                    defaultValue={fieldData[data.key]? fieldData[data.key] : ""}
                    onChange={e=> setFieldData({...fieldData,[data.key]:e.target.value})}
                    >
                        <MenuItem value={1}>
                        {data.label==="Gender" ? ("Male"):("Yes")}
                        </MenuItem>
                        <MenuItem value={0}>
                        {data.label==="Gender" ? ("Female"):("No")}
                        </MenuItem> 
                    </TextField>
                )
                
                )
            }

                    
            </Grid> 
    </Grid>
        </Grid>
     );
}
 
export default Lung;