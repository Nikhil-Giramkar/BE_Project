import AccountCircle from '@mui/icons-material/AccountCircle';
import { Grid, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { useHistory } from "react-router-dom";
import '../App.css';

const NavMod = ({title,n}) => 
{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const history = useHistory();
    //   const handleChange = (event) => {
    //     setAuth(event.target.checked);
    //   };
    
      const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const Close = () => {
    
        setAnchorEl(null);
        
      };
    
      const handleClose = () => {
    
        setAnchorEl(null);
        history.push("/disease/choice")
      };
      const handleHistory = () => {
        setAnchorEl(null);
        history.push("/disease/allHistory")
      };
      const handleLogOut = () => {
        setAnchorEl(null);
        
        localStorage.removeItem("birthName")
        localStorage.removeItem("token")
        history.push("/home")  
    };
    return (  
        <Grid container direction="row" justifyContent="space-between" alignItems="center"
                className="App-header" style={{padding:"0.1em",height:"100px"}}>
          <Grid item >
           <h1 style={{fontSize:"2.4em"}}>{title}</h1>
           </Grid>
           <Grid item >
              <Grid container direction="row">
              <Grid item style={{padding:"1.2em"}}>
              <Typography variant='h6' fontFamily={"Nunito"} style={{marginRight:"-1em"}}> {n} </Typography>
              </Grid>

              <Grid item>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ mr: 3}}
              >
                <AccountCircle  style={{ fontSize: 50 }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={Close}
              >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleHistory}>My History</MenuItem>
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
              </Menu>     
              </Grid>    
               </Grid>
           </Grid>
      </Grid>
    );
}
 
export default NavMod;