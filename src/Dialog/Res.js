import CloseIcon from "@mui/icons-material/Close";
import { Button, Grid, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useHistory } from "react-router-dom";
const Res = ({result,title}) => {
    const [open, setOpen] = React.useState(true)
    const history = useHistory();
    const handleTest = () =>
    {
         history.push("/disease/choice")
    }
    return (  
        <Dialog
         maxWidth={"md"}
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <DialogContent style={{overflow:"hidden"}}>
      <Typography variant="h4" style={{fontFamily:"Nunito"}}>
                      Result
                    </Typography>
 
                {/* <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Quam natus at amet cum obcaecati eveniet totam maiores quasi non, 
                magni illum itaque unde nihil nobis doloribus. 
                Animi perspiciatis eligendi cupiditate nulla modi voluptates, 
                vel, sed totam architecto fugit laboriosam voluptatem. 
                Quia nulla consequuntur impedit blanditiis quas libero cumque exercitationem nisi dicta eos. 
                Provident eveniet qui tempore accusantium saepe pariatur? Illo alias, adipisci praesentium atque laboriosam corrupti libero! Error ipsum ea, perspiciatis porro ducimus voluptatum tenetur? Accusantium voluptatem aut minus quam rerum adipisci odio ut dolorem fugiat quia nisi quibusdam deleniti
                 aliquam similique et illum corporis, optio illo explicabo cum esse?
                </Typography> */}
                <Grid container direction="row" style={{width:600,marginTop:"2em", marginLeft:"1em"}}>
                {
                    result===""?(
                        <Grid container>
                            <Typography variant="h5" style={{fontFamily:"Nunito" , color:"green"}}>
                            Congratulations, the test result is negative for {title} Prediction
                            </Typography>
                        </Grid>
                    ):(
                        <>
                        <Grid item style={{width:"25%"}}>
                     <div style={{ width: 120, height: 110 ,textAlign:"center"}}>
                                        <CircularProgressbarWithChildren
                            value={90}
                            strokeWidth={8}
                            styles={buildStyles({
                            pathColor:"red",
                            textColor: "black",
                            trailColor: 'grey',
                            backgroundColor: 'yellow',
                            textSize: "1em",
                            })}
                        >
                            <Typography variant="h6" style={{fontFamily:"Nunito"}}>
                            <b>Accuracy</b> <br />
                            <b>95</b>
                            <span style={{ fontSize: "18px" }}>
                                <b>%</b>
                            </span>
                            </Typography>
                        </CircularProgressbarWithChildren>
                     
                    </div>
                     </Grid>
                     <Grid item style={{width:"75%",marginTop:"1.5em"}}>
                         <Typography variant="h4" style={{fontWeight:"bolder",fontSize:"1em",fontFamily:"Nunito",color:"red"}}>
                         Unfortunately, you have been tested positive for {title} according to our prediction.
                         You have {result}
            </Typography>
                     </Grid>
                     </>
                    )
                }
                     
                </Grid>
      
      </DialogContent>
       <DialogActions sx={{ margin: 2}}>
          <Button variant="contained" color={result===1?"error":"success"} onClick={() => window.location.reload(false)}>Test Again</Button>
          <Button variant="contained" color={result===1?"error":"success"} onClick={handleTest}>Test another disease</Button>
        </DialogActions>
      <Button
            style={{
              position: "absolute",
              right: "0",
              top: "10px",
              backgroundColor: "transparent",
              color: "#000",
            }}
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </Button>
      </Dialog>
    );
}
 
export default Res;