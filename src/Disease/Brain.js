import { Button, Grid, TextField, Typography } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import '../App.css';
import { DiabetesCancer ,BrainTumour} from "../DataService/Service";
import Res from "../Dialog/Res";
import NavMod from '../NavMod/NavMod';
import { styled } from '@mui/material/styles';





  


const Brain = () => {

    const Input = styled('input')({
        display: 'none',
      });

    const [anchorEl, setAnchorEl] = React.useState(null);
    
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


const [fieldData, setFieldData] = useState({})
const history = useHistory();
const [age, setAge] = useState(0)
const [openDialog, setOpenDialog] = useState(false)
const [result, setResult] = useState("")
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
   const handleImageUpload = event => {
       console.log(event)
    const data = (event) ? event.target.files[0] : event
    console.log(data)
    setFieldData({...fieldData,['image']:data})
    console.log(data)
};
  const handleResult = async (e) => 
  {
    
      let Data = new FormData();
      for (const t in fieldData ) 
      {
          Data.append(t,fieldData[t]);
          console.log(`${t}: ${fieldData[t]}`);
      }
      const res = await  BrainTumour(Data ,tok)
      console.log(res)
      if(res==0)
      {
           history.push("/home")
      }
      let string1 = "no_tumor";
     let  result1 = string1.localeCompare(res["Brain Tumor"]);
      result1===0 ?setResult(""):setResult(res["Brain Tumor"]);
      console.log(result)
      setOpenDialog(true)
  };
    return ( 
        <Grid container className="Medform">

          {openDialog && <Res result={result} title={"Brain Tumor"}/>}
              
              <NavMod title={"Brain Tumour Prediction"} n={bName}/>
            <Grid container direction="column" style={{}}>  
          
            <Grid container direction="column" style={{ margin:"-30em auto",  height:"40%",width:"53%"}}>
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

                    <TextField
                    id="outlined-select-currency"
                    select
                    style={{marginTop:"1em",width:"15em"}}
                    label="Gender"       
                          
                    defaultValue={fieldData["Gender"]? fieldData["Gender"] : ""}
                    onChange={e=> setFieldData({...fieldData,["Gender"]:e.target.value})}
                    >
                        <MenuItem value={1}>
                        Male
                        </MenuItem>
                        <MenuItem value={0}>
                        Female
                        </MenuItem> 
                    </TextField>    


        <label htmlFor="contained-button-file">
        <Input accept="image/*" onChange={event => handleImageUpload(event)} id="contained-button-file" multiple type="file" />
        <Button variant="contained" style={{marginTop:"1em"}} component="span">
          Upload Image
        </Button>
      </label>



      <Button variant="contained" onClick={handleResult} style={{marginTop:"1em",width:"15em"}} color="success" size="large">Submit</Button>    
    
                    
            </Grid> 
            <Typography variant="h6" id="l1" style={{margin:"6em auto",fontSize:"1.2em",fontFamily:"Nunito"}}>
                  Please select all fields properly and then click on submit
            </Typography>
    </Grid>
    
        </Grid>
     );
}
 
export default Brain;