import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Appointments = ({date}) => {
    const { user,token } = useAuth();
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${date}`
        fetch(url, {
            headers: {
                'authorization':`Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [date, user.email, token])
    // tptal***
//     let totalQuantity = 0;
//     let total = 0;
//         for (const product of appointments) {
//     if (!product.quantity) {
//         product.quantity = 1;
//         }
// total = total + product.price * product.quantity;
// totalQuantity = totalQuantity + product.quantity;
// }
    return (
        <div>
            <h2>Appointments: {appointments.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.payment ?
                                    'Paid' :
                                    <Link to={`/dashboard/payment/${row._id}`}><button>Pay</button></Link>
                                }</TableCell>
                            
                            </TableRow>
                        ))}

                        
                    </TableBody>
                    {/* <p>Total: {total.toFixed(2)}</p>
                    <p>
                        {total.payment ?
                            'Paid' :
                            <Link to={`/dashboard/payment`}><button>Pay</button></Link>}
                    </p> */}
                </Table>
            </TableContainer>

        </div>
    );
};
export default Appointments;