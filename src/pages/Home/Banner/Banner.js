import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button,Container} from '@mui/material';
import chair from '../../../images/chair.png'
import chairbg from '../../../images/bg.png'

const bannerBg = {
    background: `url(${chairbg})`,
    height:480
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
                <Grid item style={{textAlign:'left'}} xs={12} md={5}>
                <Typography variant="h3" sx={{fontWeight:'400',color:'black',my:4}} component="div">
          Your New Smile <br/>Starts Here
        </Typography>
                    <Typography sx={{color:'gray'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus, unde quis voluptatem officiis similique ratione nemo
                    </Typography>
                    <Button variant="contained" sx={{m:2}} style={{backgroundColor:'#9907ed'}}>Get Appoinment</Button>
        </Grid>
                <Grid item xs={12} style={verticalCenter} md={7}>
                    <img src={chair} style={{width:'400px'}} alt="" />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Banner;