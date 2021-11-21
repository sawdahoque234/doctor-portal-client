import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';

import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus, unde quis voluptatem officiis similique ratione nemo? Aperiam autem, unde, quas possimus eum est consequuntur necessitatibus hic maxime, cupiditate dolore.',
        img:fluoride
      },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus, unde quis voluptatem officiis similique ratione nemo? Aperiam autem, unde, quas possimus eum est consequuntur necessitatibus hic maxime, cupiditate dolore.',
        img:cavity
      },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus, unde quis voluptatem officiis similique ratione nemo? Aperiam autem, unde, quas possimus eum est consequuntur necessitatibus hic maxime, cupiditate dolore.',
        img:whitening
      }
  ]
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Typography variant="h6" sx={{fontWeight:'400',color:'info.main',m:2}} component="div">
            OUR SERVICES
        </Typography>
          <Typography variant="h4" sx={{fontWeight:500,m:3}} component="div">
            Services We Provide
        </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
        }
      </Grid>
        </Container>
    </Box>
    );
};

export default Services;