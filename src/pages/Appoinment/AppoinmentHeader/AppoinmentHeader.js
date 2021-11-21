import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png'
import Calender from '../../../Shared/Calender/Calender/Calender';

const AppoinmentHeader = ({date,setDate}) => {

    return (
        <Container style={{marginTop:"14px"}}>
            <Grid container item spacing={2}>
            <Grid xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
            </Grid>
                <Grid xs={12} md={6}>
                <img src={chair} style={{width:'100%'}} alt=""/>
            </Grid>
            </Grid>
        </Container>
    );
};

export default AppoinmentHeader;