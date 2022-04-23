
import { Grid } from '@mui/material';
import { Switch } from "react-router-dom";
import { getRoutes } from "../RouteService/RouteFunction";
import { routes } from "../RouteService/routes";


const UserLayout = () => {
    return ( 


<>
            <Grid container>
                    <Switch>
                        { getRoutes ( routes ) }
                        
                    </Switch>
            </Grid>
        </>
 

     );
}
 
export default UserLayout;