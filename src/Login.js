import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Card, Grid, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import React from "react";
import { Link, useHistory } from "react-router-dom";
import './App.css';
import { LoginUser } from './DataService/Service';
import Log from "./images/b1.jpg";
const Login = () => {


    const [logData, setLogData] = React.useState({email:"",password:"",role:1});
    const [error, setError] = React.useState({email:false,password:false,emps:false});
    const [loginAs, setLoginAs] = React.useState(1);
    const [loading, setLoading] = React.useState(false);
    function handleClick() {
      setLoading(true);
    }
    const history = useHistory();
    const handleSubmit = async (e) => 
    {
       console.log(logData["email"])
       if(logData["email"]==="" && logData["password"]==="")
       {
         setError({...error,["emps"]:true})   
       }
       else if(logData["email"]==="")
        {
            setError({...error,["email"]:true});
            console.log(error["email"])
        }
        else if(logData["password"] === "")
        {
                setError({...error,["password"]:true});
                console.log(error["password"])
        }
        else
        {
            let UserData = new FormData();
            UserData.append('email' , logData["email"] )
            UserData.append('role' , loginAs )
            UserData.append('password' , logData["password"] )
        
            for (var pair of UserData.entries()) {
                console.log(pair[0]+ ', ' + pair[1]); 
            }
            const data = await LoginUser(UserData)
            console.log(data)
            if(Object.keys(data).length === 0){
                history.push("/home")
            }
            if(Object.keys(data).length > 0){
                localStorage.setItem('token', data.token);
                localStorage.setItem('birthName', data.name);
                
                history.push("/disease/choice")
            }
        }
            
    };
    

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };


      
      const handleLogin = (event) => {
          console.log(event.target.value);
        setLoginAs(event.target.value);
      };
    return (  

         
        <Grid container className="grid" >
                         {
                           error["emps"] &&
                            <Snackbar
                                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                                open={error["emps"]}
                                autoHideDuration={2000}
                                onClose=
                                {
                                 ()=>{ setError({...error,["emps"]:false});}
                                }
                            >
                            <Alert variant="filled" severity="error">
                                 Please fill all the fields correctly.
                            </Alert>
                            </Snackbar>
                       }
                        
                       {
                           error["email"] &&
                            <Snackbar
                                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                                open={error["email"]}
                                autoHideDuration={2000}
                                onClose={()=>{
                                    setError({...error,["email"]:false});
                                }}
                            >
                            <Alert variant="filled" severity="error">
                                 Please fill the email correctly.
                            </Alert>
                            </Snackbar>
                       }
                       {
                           error["password"] &&
                            <Snackbar
                                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                                open={error["password"]}
                                autoHideDuration={2000}
                                onClose={()=>{
                                    setError({...error,["password"]:false});
                                }}
                            >
                            <Alert variant="filled" severity="error">
                                 Please fill the password correctly.
                            </Alert>
                            </Snackbar>
                       }
                        <Card elevation={4} className="logincard" style={{borderRadius:1 , width:"100%"}}>
                            <Grid container direction="row">
                                <Grid item className="imagegrid">
                                    <img
                                        src={Log}
                                        alt="AssessmentPic"
                                        style={{ width: "100%", height:"100%" }}
                                    />
                                </Grid>
                                <Grid item className="formgrid">
                                   
                                    
                                        <Typography                                 
                                            variant="h4" style={{textAlign:"center"
                                            ,fontFamily:"Nunito", color:"black",fontWeight:"bolder",marginTop:"0.9em" }}
                                        >
                                            LOGIN
                                        </Typography>

                                        <Box
                                            sx={{
                                                width: "60%",
                                                maxWidth: '100%',
                                            }}
                                            style={{margin:"2em 7.8em"}}
    >
                                        <TextField
                                            fullWidth
                                            id="input-with-icon-textfield"
                                            label="Email"
                                            color="secondary"
                                            name="email"
                                            value={logData["email"]?logData["email"]:""}
                                            onChange={(e)=>{
                                                setLogData({...logData,[e.target.name]:e.target.value})
                                            }}
                                            InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                <AccountCircle />
                                                </InputAdornment>
                                            ),
                                            }}
                                            variant="outlined"
                                           
                                            
                                        />

                                        </Box>


                                        <Box
                                            sx={{
                                                width: "60%",
                                                maxWidth: '100%',
                                            }}
                                            style={{margin:"2em 7.8em"}}
    >
                                         <TextField
                                            fullWidth
                                            id="input-with-icon-textfield"
                                            label="Password"
                                            name="password"
                                            color="info"
                                            type={showPassword ? 'text' : 'password'}
                                            value={logData["password"]?logData["password"]:""}
                                            onChange={(e)=>{
                                                setLogData({...logData,[e.target.name]:e.target.value})
                                            }}
                                            InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                <LockIcon />
                                                </InputAdornment>
                                            ),
                                            endAdornment:(
                                                <InputAdornment position="end">
                                                    <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                            }}
                                          
                                            variant="outlined"
                                           
                                            
                                        />

                                        </Box>



                                        <Box
                                            sx={{
                                                width: "60%",
                                                maxWidth: '100%',
                                            }}
                                            style={{margin:"0em auto"}}
                                      >
                                        <FormControl >
      <FormLabel id="demo-controlled-radio-buttons-group">Login As</FormLabel>
      <RadioGroup
      row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={loginAs}
        onChange={handleLogin}
      >
        <FormControlLabel value={1} control={<Radio />} label="User" />
        <FormControlLabel value={2} control={<Radio />} label="Pharma" />
      </RadioGroup>
    </FormControl>
    </Box>

                                        <Box
                                            sx={{
                                                width: "60%",
                                                maxWidth: '100%',
                                            }}
                                            style={{margin:"0.5em 7.8em"}}
                                      >
                                      {/* <Link to="/disease/choice" style={{textDecoration:"none"}}> */}
                                                    <LoadingButton
                                                    fullWidth
                                                                    onClick={handleSubmit}
                                                                    loading={false}
                                                                    loadingIndicator="....Logging...."
                                                                    variant="contained"
                                                                >
                                                                    Sign In
                                                    </LoadingButton>
                                                    {/* </Link>    */}
                                </Box>
                                <p style={{marginTop:-1,textAlign:"center"}}>
                                    New user ?   <Link to="/register" style={{textDecoration:'none',cursor:"pointer"}}> <span style={{fontWeight:"bolder"}}>Register Here</span>  </Link>
                                     
                                </p>
                                    
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
             


    );
}
 
export default Login;