import { Button, Grid, TextField, Typography } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import '../App.css';
import { DiabetesCancer } from "../DataService/Service";
import Result from "../Dialog/Result";
import NavMod from '../NavMod/NavMod';
const Diabetes = () => {

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

const arr = 
[

    {label:"Gender" , key:"Gender"},
    {label:"Polyuria" , key:"Polyuria"},
    {label:"Polydipsia", key:"Polydipsia"},
    {label:"Sudden Weight Loss" , key:"Sudden_Weight_Loss"},
    {label:"Weakness" , key:"Weakness"},
    {label:"Polyphagia" , key:"Polyphagia"},
    {label:"Genital Thrush" , key:"Genital_Thrush"},
    {label:"Visual Blurring" , key:"Visual_Blurring"},
    {label:"Itching" , key:"Itching"},
    {label:"Irritability" , key:"Irritability"},
    {label:"Delayed Healing" , key:"Delayed_Healing"},
    {label:"Partial Paresis" ,key:"Partial_Paresis"},
    {label:"Muscle Stiffness" , key:"Muscle_Stiffness"},
    {label:"Alopecia" , key:"Alopecia"},
    {label:"Obesity" , key:"Obesity"},
    {label:"button"},
]
// const arr = 
// [
//     {label:"Gender" , key:"gender"},
//     {label:"Smoking" , key:"smoking"},
//     {label:"Yellow", key:"yellow"}
// ]

const [fieldData, setFieldData] = useState({})
const history = useHistory();
const [age, setAge] = useState(0)
const [openDialog, setOpenDialog] = useState(false)
const [result, setResult] = useState(1)
useEffect(() => {
    console.log(fieldData)
    console.log(age)
  }, [fieldData])
  const [tok, setTok] = React.useState(localStorage.getItem("token"));
  const [bName, setBName] = React.useState(localStorage.getItem("birthName"));
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
  const handleResult = async (e) => 
  {
    
      let Data = new FormData();
      for (const t in fieldData ) 
      {
          Data.append(t,fieldData[t]);
          console.log(`${t}: ${fieldData[t]}`);
      }
      const res = await  DiabetesCancer(Data ,tok)
      if(res==0)
      {
      history.push("/home")
      }
      setResult(res["Diabetes"][0])
      console.log(result)
      setOpenDialog(true)
  };
    return ( 
        <Grid container className="Medform">

          {openDialog && <Result result={result} title={"Diabetes"}/>}
              
              <NavMod title={"Diabetes Prediction"} n={bName}/>
            <Grid container direction="column" style={{paddingTop:"2em"}}>  
            <Typography variant="h6" id="l1" style={{margin:"-0.1em auto",fontSize:"1.2em",fontFamily:"Nunito"}}>
            Please select all fields properly and then click on submit
            </Typography>
            <Grid container direction="column" style={{ margin:"3em auto",  height:"40%",width:"53%"}}>
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
                    <Button variant="contained" onClick={handleResult} style={{marginTop:"1em",width:"15em"}} color="success" size="large">Submit</Button>    
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
 
export default Diabetes;