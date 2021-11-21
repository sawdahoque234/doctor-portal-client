import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const {token}=useAuth()
    const handleOnBlur = e => {
    setEmail(e.target.value)
}
    const handleAdminSubmit = e => {
        const user={email}
        fetch('http://localhost:5000/users/admin', {
            method:'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res=>res.json())
            .then(data => {
                if (data.modifiedCount) {
                    // alert('Make Admin Successfully!!!')
                    setSuccess(true)

                }
                // console.log(data)
            })
        e.preventDefault()
    }

    return (
        <div>
            <h1>Make an admin</h1>
            <form onSubmit={handleAdminSubmit}>
            <TextField
                            sx={{ width: '25%' }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnBlur}
                    variant="standard" />
                <Button style={{margin:'10px'}} type="submit" variant="contained">Make Admin</Button>
                
            </form>
            {success && <Alert style={{padding:'10px',backgroundColor:'gray',width:'50%',color:'white'}} severity="success">Made Admin successfully!</Alert>}

        </div>
    );
};

export default MakeAdmin;