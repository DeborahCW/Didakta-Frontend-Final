import React from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import logo from "../images/icon-red.png";
import { Box } from "@mui/system";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@mui/material";
import "../styles/mui_styles.css";
import "../styles/home.css";

export default function Home() {

   
    return(
        <Container className="MuiContainer-root-MuiContainer-maxWidthSm-css-kae4yu-MuiContainer-root"
        component="main" sx={{ mt: 3, mb: 2, pl: 1 }} maxWidth="sm" justifyContent="center" >
             {/* <Card sx={{ pl:5, pr: 5, pt:5, pb:-10 }} bgColor="#eceff1" >  */}
            <Link to="/register">
          <img
            id="Logo"
            width="100"
            // padding-top="3"
            src={logo}
            alt="Didakta Logo"
            style={{ pt: "5px", mt: "10px", pl: 8 }}
          />
            </Link>
               
            {/* <Typography variant="body1" justifyContent="center" marginTop="50px"></Typography> */}
        <Typography className="MuiTypography-root-MuiTypography-h2-MuiTypography-gutterBottom-css-490uua-MuiTypography-root" 
        variant="h2" component="h1" gutterBottom justifyContent="center" sx={{ pl: 1, }}>
         Learn ancient Greek
        </Typography>
        <Typography className="MuiTypography-root-MuiTypography-h5-MuiTypography-gutterBottom-css-xwdu4f-MuiTypography-root"
        variant="h5" component="h2" gutterBottom justifyContent="center" sx={{ pl:5 }}>
          {'A masterclass provided for you by Didakta.'}
          
        </Typography>
        <Typography variant="body1" justifyContent="center" sx={{ pl: 23 }}>Click to register or login.</Typography>
          
            {/* <Box backgroundColor="#eceff1">   */}
            <div >
        <iframe
          className="alignmentBlock"
          frameBorder="0"
          seamless="seamless"
          allowtransparency="true"
          src="http://ugarit.ialigner.com/embed.php?id=28937&pb=0&user=0&title=0&pi=0" 
          title="Ugarit | iAligner"
          scrolling="no"
          height="70%"
        ></iframe>
        {/* <CardActions >
        <Button size="small" >learn more</Button>
      </CardActions> */}
      </div>
      {/* </Card> */}
      {/* </Box> */}
     
      </Container>
    )
}