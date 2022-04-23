import { Grid } from '@mui/material';
import { Link } from "react-router-dom";
import './App.css';


const Nav = ({noLinks ,pd}) => {
    return ( 
 
        <Grid container direction="row" justifyContent="space-between" alignItems="center"
       className="App-header" style={{padding:`${pd}em`}}>
          <Grid item >
           <h1 style={{fontSize:"2.4em"}}>DOCTOR__PREDICTOR</h1>
           </Grid>
           <Grid item >
              <Grid container direction="row">
              {noLinks==1?(<></>):(<Link to="/home" style={{textDecoration:'none',color:"whitesmoke"}}><h2 >Home</h2></Link>)}
              
              {noLinks==2?(<></>):(<Link to="/login" style={{textDecoration:'none',color:"whitesmoke"}}><h2 >Login</h2></Link>)}
               
      
                <Link to="/register" style={{textDecoration:'none',color:"whitesmoke"}}><h2 className="reg" >Register</h2></Link>
              </Grid>
           </Grid>
      </Grid>
     
     );
}
 
export default Nav;