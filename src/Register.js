import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Card, Grid, Modal, Typography } from '@mui/material';
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
import OTPInput from "otp-input-react";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import './App.css';
import { checkUserValidtion, verifyOtp } from './DataService/Service';
import Reg from "./images/b2.jpg";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor:"white",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Register = () => {
    const [loading, setLoading] = React.useState(false);
   
    const [otp, setOtp] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const history = useHistory();
    const [showPassword, setShowPassword] = React.useState(false);
    const [registerAs, setRegisterAs] = React.useState(1);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const handleChange = () => {
        // setLoading(!loading);
        
    };
    const [logData, setLogData] = React.useState({email:"",password:"",username:""});
    const [error, setError] = React.useState({email:false,password:false,username:false,emps:false});
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = async (e) => 
    {
        
       if(logData["email"]==="" && logData["password"]==="" && logData["username"]==="")
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
        else if(logData["username"] === "")
        {
                setError({...error,["username"]:true});
                console.log(error["username"])
        }
        else
        {
            let UserData = new FormData();
            UserData.append('email' , logData["email"] )
            UserData.append('name' , logData["username"] )
            UserData.append('role' , registerAs )
            UserData.append('password' , logData["password"] )
            console.log(UserData)
            const res = await checkUserValidtion(UserData)
            console.log(res)
            if(res==0)
            {
               handleOpen()  
            }else{
                console.log("here")
                history.push("/login")
            }
        }
            
    };
  async function handleClick() {
        console.log(otp)
        setLoading(true);
        let UserData = new FormData();
        UserData.append('email' , logData["email"] )
        UserData.append('otp' , otp )
        const res =await verifyOtp(UserData)
        console.log(res)

setTimeout(() => {

    if(res==0){
        console.log("otp veify")
        setLoading(false)
        history.push("/login")
    }
    else{
        console.log("ikde yet ahe")
        history.push("/home")
    } 
    
}, 1000);

        
    }



  
  const handleLogin = (event) => 
  {
    setRegisterAs(event.target.value);
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
                       {
                           error["username"] &&
                            <Snackbar
                                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                                open={error["username"]}
                                autoHideDuration={2000}
                                onClose={()=>{
                                    setError({...error,["username"]:false});
                                }}
                            >
                            <Alert variant="filled" severity="error">
                                 Please fill the username correctly.
                            </Alert>
                            </Snackbar>
                       }
                          <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                                <Box sx={style}>
                                    <Grid  xs={12} textAlign="center">
                                        <Typography variant="h6">
                                            Please enter the verification code sent to your email
                                        </Typography>         
                                    </Grid>
                                    <Grid item spacing={3} justify="center">
                                    <OTPInput value={otp} onChange={setOtp}  autoFocus OTPLength={6}
                                     otpType="number" disabled={false} inputStyles={{
                                            color:"black", 
                                            width: "3rem",
                                            height: "3rem",
                                            margin: "1em auto",
                                            fontSize: "2rem",
                                            borderRadius: 4,
                                            border: "1px solid rgba(0,0,0,0.3)"
                                            }}  />
                                       
                                    </Grid>
                                    <Grid container justifyContent="center" style={{marginTop:"1em"}}>
                                            <LoadingButton
                                                onClick={handleClick}
                                                loading={loading}
                                                // loadingPosition="start"
                                                // startIcon={<SaveIcon />}
                                                // loadingIndicator="....Logging...."
                                                variant="contained"
                                                color="secondary"
                                            >
                                                        verify
                                        </LoadingButton>
                                    </Grid>
                                </Box>
                        </Modal>
                         {/* <Nav noLinks={2} pd={0.3}/> */}
                        <Card elevation={4} className="logincard" style={{borderRadius:1 , width:"100%"}}>
                            <Grid container direction="row">
                                <Grid item className="imagegrid">
                                    <img
                                        src={Reg}
                                        alt="AssessmentPic"
                                        style={{ width: "100%", height:"100%" }}
                                    />
                                </Grid>
                                <Grid item className="formgrid">
                                   
                                    
                                        <Typography                                 
                                            variant="h4" style={{textAlign:"center"
                                            ,fontFamily:"Nunito", color:"black",fontWeight:"bolder",marginTop:"0.2em" }}
                                        >
                                            REGISTER
                                        </Typography>

                                        <Box
                                            sx={{
                                                width: "60%",
                                                maxWidth: '100%',
                                            }}
                                            style={{margin:"1.2em 7.8em"}}
    >
                                        <TextField
                                            fullWidth
                                            id="input-with-icon-textfield"
                                            label="Full Name"
                                            color="secondary"
                                            name="username"
                                            value={logData["username"]?logData["username"]:""}
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
                                            style={{margin:"1.4em 7.8em"}}
    >
                                        <TextField
                                            fullWidth
                                            id="input-with-icon-textfield"
                                            label="Email address"
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
                                            style={{margin:"1.4em 7.8em"}}
    >
                                        <TextField
                                            fullWidth
                                            id="input-with-icon-textfield"
                                            label="Password"
                                            color="info"
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
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
      <FormLabel id="demo-controlled-radio-buttons-group">Register As</FormLabel>
      <RadioGroup
      row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={registerAs}
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


                                <LoadingButton
                                                fullWidth
                                                onClick={handleSubmit}
                                                loadingIndicator="....Logging...."
                                                variant="contained"
                                                color="secondary"
                                            >
                                                Register
                                </LoadingButton>
                                </Box>
                                    
                                <p style={{marginTop:-1,textAlign:"center"}}>
                                    Already Registered ? <Link to="/login" style={{textDecoration:'none',cursor:"pointer"}}> <span style={{fontWeight:"bolder"}}>Sign In</span>  </Link>
                                     
                                </p>


                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
             


    );
}
 
export default Register;