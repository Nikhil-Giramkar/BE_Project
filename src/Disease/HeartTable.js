import { Grid ,Paper} from '@mui/material';
import Table from 'react-bootstrap/Table';
import '../App.css';
import NavMod from '../NavMod/NavMod';
import { useEffect , useState } from 'react';
import { getHeartTable } from '../DataService/Service';
import { useHistory } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
const HeartTable = () =>{
    
const history = useHistory();
const [result, setResult] = useState({});
const [loading, setLoading] =useState(true);
const [birthName, setBirthName] = useState(localStorage.getItem("birthName"));
useEffect(() => {
  
handleData();

}, [])

useEffect(() => {
  
 
  console.log("here")
    console.log(result)

    setTimeout(() => {
        setLoading(false)
        console.log(result[0])
    }, 2000);

  
    }, [result])

const handleData =async () =>
{
  let tok = localStorage.getItem("token")
   const res = await getHeartTable(tok)
   console.log(res);
   setResult(res);
   console.log(result[0])
//    if(res.length == 0){
//     history.push("/home")
//     }
}


return(
    <Grid container className="Medform">
       <NavMod title={"Heart Statistics"} n={birthName} />

<Grid item style={{width:"100%"}}>
    <Paper  style={{ height: "30em" ,margin:"2em 20em",width:"60%" }}>
        <Table striped bordered hover responsive="sm" variant="dark" size='md' style={{width:"100%"}}>
            <thead>
                <tr>
                <th colspan="2" style={{fontStyle:"italic" , fontSize:"1.5em"}}>Gender Vs Result</th>
                </tr>
                <tr>
                <th>Gender</th>
                <th>Result</th>
                </tr>
            </thead>
            <tbody>
                {
                    loading?(
                        <CircularProgress />
                    ):(
                        Object.keys(result[0]).map(function(keyName, keyIndex) {
                            return (
                                <tr>
                                    <td>{keyName}</td>
                                    <td>{result[0][keyName]}</td>
                                </tr>
                            )
                        })
                    )
                }
            </tbody>
        </Table>
    </Paper>


    <Paper  style={{ height: "30em" ,margin:"5em 20em",width:"60%" }}>
        <Table striped bordered hover responsive="sm" variant="dark" size='md' style={{width:"100%"}}>
            <thead>
                <tr>
                <th colspan="2" style={{fontStyle:"italic" , fontSize:"1.5em"}}>Chest Pain Vs Result</th>
                </tr>
                <tr>
                <th>Type of Chest Pain</th>
                <th>Result</th>
                </tr>
            </thead>
            <tbody>
                {
                    loading?(
                        <CircularProgress />
                    ):(
                        Object.keys(result[1]).map(function(keyName, keyIndex) {
                            return (
                                <tr>
                                    <td>{keyName}</td>
                                    <td>{result[1][keyName]}</td>
                                
                                </tr>
                            )
                        })
                    )
                }
            </tbody>
        </Table>
    </Paper>
</Grid>


</Grid>

);

}

export default HeartTable;