import { Grid ,Paper} from '@mui/material';
import Table from 'react-bootstrap/Table';
import '../App.css';
import NavMod from '../NavMod/NavMod';
import { useEffect , useState } from 'react';
import { getHistory } from '../DataService/Service';
import { useHistory } from "react-router-dom";

const Tab = () =>{
    
  const history = useHistory();
const [hist, setHist] = useState([]);
useEffect(() => {
  
handleData();

}, [])

const handleData =async () =>
{
  let tok = localStorage.getItem("token")
   const res = await getHistory(tok)
   if(res==0){
    history.push("/home")
    }
    setHist(res);
   

}


return(
    <Grid container>
       <NavMod title={"Your History"} n={""} />

<Grid item style={{width:"100%"}}>
            <Paper  style={{ height: "30em" ,margin:"5em 20em",width:"60%" }}>
            <Table striped bordered hover responsive="sm" variant="dark" size='md' style={{width:"100%"}}>
  <thead>
    <tr>
      <th>id</th>
      <th>City</th>
      <th>Disease Checked</th>
      <th>Result</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    {
        hist.length>0?(
          hist.map(item=>
            <tr> 
      <td>{item.id}</td>
      <td>{item.City}</td>
      <td>{item.DiseaseChecked}</td>
      <td>{item.Result}</td>
      <td>{item.Date}</td>
    </tr>
      )
        ):("No Data Avaiable")
    }

  </tbody>
</Table>
            </Paper>
          </Grid>


</Grid>

);

}

export default Tab;