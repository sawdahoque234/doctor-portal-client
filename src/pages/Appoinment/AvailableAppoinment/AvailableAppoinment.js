import  React , { useState }from 'react';
import Grid from '@mui/material/Grid';
import { Container,Alert } from '@mui/material';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 Pm',
        price:'30',
        space:9
    },
    {
        id: 2,
        name: 'Cosmeyic Dentistry',
        time: '08.00 AM - 09.00 Pm',
        price:'301',
        
        space:6
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '08.00 AM - 09.00 Pm',
        price:'300',
        
        space:7
    },
    {
        id: 4,
        name: 'Pediatric Dental',
        time: '08.00 AM - 09.00 Pm',
        price:'302',
        
        space:11
    },
    {
        id: 5,
        name: 'Cavity Protection',
        time: '08.00 AM - 09.00 Pm',
        price:'550',
        
        space:12
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '08.00 AM - 09.00 Pm',
        price:'3099',
        
        space:8
    }
]
const AvailableAppoinment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <h1 style={{color:'#9907ed'}}>Available Appoinments {date.toLocaleDateString()}</h1>
             
            {bookingSuccess && <Alert style={{padding:'10px',backgroundColor:'#199c93',color:'white'}} severity="success">Booked appointment successfully!</Alert>}
                                                           
            <Grid container item spacing={2}>
                {
                    bookings.map(booking => <Booking key={booking.id}
                        booking={booking} date={date}
                        setBookingSuccess={setBookingSuccess}

                    ></Booking>)
            }

            </Grid>
            </Container>
    );
};

export default AvailableAppoinment;