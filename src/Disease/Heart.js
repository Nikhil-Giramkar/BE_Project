import { Button, Grid, TextField, Typography } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { default as React, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import '../App.css';
import { HeartCancer } from "../DataService/Service";
import Result from "../Dialog/Result";
import NavMod from '../NavMod/NavMod';
const Heart = () => {

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

      const arr2=[
        {label:"ChestPainType", key:"ChestPainType"},
        {label:"RestingBP", key:"RestingBP"}, 
        {label:"Cholesterol", key:"Cholesterol"},
        {label:"RestingECG", key:"RestingECG"},
        {label:"MaxHR", key:"MaxHR"},
        {label:"Oldpeak", key:"Oldpeak"},
        {label:"ST_Slope", key:"ST_Slope"},
      ]
    const arr = 
    [
        {label:"Gender", key:"Sex"},
        
       
        {label:"FastingBS", key:"FastingBS"},
        {label:"ExerciseAngina", key:"ExerciseAngina"},
       
        
        {label:"button"}
    ]
        const [fieldData, setFieldData] = React.useState({})
        const history = useHistory();
        const [openDialog, setOpenDialog] = useState(false)
        const [result, setResult] = useState(1)
        useEffect(() => {
            console.log(fieldData)
          }, [fieldData])

          // const [tok, setTok] = React.useState(localStorage.getItem("token"));
          const [bName, setBName] = React.useState(localStorage.getItem("birthName"));
        const handleResult = async (e) => 
        {
          let tok = localStorage.getItem("token")
            let Data = new FormData();
            for (const t in fieldData ) 
            {
                Data.append(t,fieldData[t]);
                console.log(`${t}: ${fieldData[t]}`);
            }
            const res = await HeartCancer(Data ,tok)
            if(res==0)
            {
              history.push("/home")
            }
            console.log(res) 
            setResult(res["Heart Attack"][0])
            console.log(result)
            setOpenDialog(true)
        };

    return ( 

        <Grid container className="Medform">
        {openDialog && <Result result={result} title={"Heart Attack"}/>}
              
            <NavMod title={"Heart Cancer Prediction"} n={bName}/>

            <Grid container direction="column" >  

                <Typography variant="h6" id="l1" style={{margin:"-7em auto",fontSize:"1.2em",fontFamily:"Nunito"}}>
                Please select all fields properly and then click on submit
                </Typography>
                <Grid container direction="column" style={{margin:"10em auto",  height:"40%",width:"53%"}}>
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
       
                <TextField id="outlined-basic" type={"number"} label="Age" style={{marginTop:"1em",width:"15em"}} defaultValue={fieldData['Age']? fieldData['Age'] : ""}
                onChange={e=> setFieldData({...fieldData,['Age']:parseInt(e.target.value)})} variant="outlined" />

                      <TextField
                        id="outlined-select-currency"
                        select
                        style={{marginTop:"1em",width:"15em"}}
                        label="ChestPainType"          
                        defaultValue={fieldData["ChestPainType"]? fieldData["ChestPainType"] : ""}
                        onChange={e=> setFieldData({...fieldData,["ChestPainType"]:e.target.value})}
                        >
                                <MenuItem value={3}>
                                Typical Angina
                                </MenuItem> 
                                <MenuItem value={2}>
                                Non-Anginal Pain
                                </MenuItem> 
                                <MenuItem value={1}>
                                Atypical Angina
                                </MenuItem>
                                <MenuItem value={0}>
                                Asymptomatic
                                </MenuItem> 
                        </TextField>


                        <TextField
                        id="outlined-select-currency"
                        select
                        style={{marginTop:"1em",width:"15em"}}
                        label="RestingECG"          
                        defaultValue={fieldData["RestingECG"]? fieldData["RestingECG"] : ""}
                        onChange={e=> setFieldData({...fieldData,["RestingECG"]:e.target.value})}
                        >
                             
                              <MenuItem value={2}>
                              ST
                              </MenuItem> 
                              <MenuItem value={1}>
                              Normal
                              </MenuItem>
                              <MenuItem value={0}>
                              LVH
                              </MenuItem> 
                        </TextField>


                        <TextField
                        id="outlined-select-currency"
                        select
                        style={{marginTop:"1em",width:"15em"}}
                        label="ST_Slope"          
                        defaultValue={fieldData["ST_Slope"]? fieldData["ST_Slope"] : ""}
                        onChange={e=> setFieldData({...fieldData,["ST_Slope"]:e.target.value})}
                        >
                             
                              <MenuItem value={2}>
                              Up
                              </MenuItem> 
                              <MenuItem value={1}>
                              Flat
                              </MenuItem>
                              <MenuItem value={0}>
                              Down
                              </MenuItem> 
                        </TextField>

                        <TextField id="outlined-basic" type={"number"} label="RestingBP" style={{marginTop:"1em",width:"15em"}} defaultValue={fieldData['RestingBP']? fieldData['RestingBP'] : ""}
                onChange={e=> setFieldData({...fieldData,['RestingBP']:parseInt(e.target.value)})} variant="outlined" />
           <TextField id="outlined-basic" type={"number"} label="Cholesterol" style={{marginTop:"1em",width:"15em"}} defaultValue={fieldData['Cholesterol']? fieldData['Cholesterol'] : ""}
                onChange={e=> setFieldData({...fieldData,['Cholesterol']:parseInt(e.target.value)})} variant="outlined" />
                <TextField id="outlined-basic" type={"number"} label="MaxHR" style={{marginTop:"1em",width:"15em"}} defaultValue={fieldData['MaxHR']? fieldData['MaxHR'] : ""}
                onChange={e=> setFieldData({...fieldData,['MaxHR']:parseInt(e.target.value)})} variant="outlined" />
                 <TextField id="outlined-basic" type={"number"} label="Oldpeak" style={{marginTop:"1em",width:"15em"}} defaultValue={fieldData['Oldpeak']? fieldData['Oldpeak'] : ""}
                onChange={e=> setFieldData({...fieldData,['Oldpeak']:parseInt(e.target.value)})} variant="outlined" />
                
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
                        {data.label==="Sex" ? ("Male"):("Yes")}
                        </MenuItem>
                        <MenuItem value={0}>
                        {data.label==="Sex" ? ("Female"):("No")}
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
 
export default Heart;