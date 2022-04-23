import { Box, Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom";
const MedCard = ({head,im,content,btname,url,bName,tok}) => {
    return ( 

<>
        <Card sx={{ maxWidth: 400 , height:600}} >

                  <CardHeader
                   style={{backgroundColor:"rgb(255, 0, 64)"}}
                   title={
                      <Typography variant="h6"  style={{fontFamily:"Nunito",fontWeight:"bolder"}}>
                            {head}
                      </Typography>
                  } />
   
                  <CardMedia
                        component="img"
                        height="194"
                        image={im}
                        alt="Paella dish"
                    />

                <CardContent >
                        
                        <Typography paragraph style={{fontFamily:"Nunito",fontWeight:"bold"}}>
                           {content}
                        </Typography>
                      
                </CardContent> 

                <Box
                                            sx={{
                                                width: "80%",
                                                maxWidth: '100%',
                                            }}
                                            style={{margin:"0.5em auto"}}
                                      >
                                      <Link to={url} state={{ bName:bName,tok:tok }} style={{textDecoration:"none"}}>
                                                    <Button
                                                    fullWidth
                                                    color="secondary"
                                                                    variant="contained"
                                                                >
                                                                    {
                                                                        <h4>
                                                                            {btname}
                                                                        </h4>
                                                                    }
                                                    </Button>
                                    </Link>                
                                </Box>
                                
                   
                  </Card>
                  </>

     );
}
 
export default MedCard;
