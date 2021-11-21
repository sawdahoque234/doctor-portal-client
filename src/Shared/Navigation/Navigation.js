import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Navigation = () => {
  const {user,logout} = useAuth();
    return (
        <div>
           <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
            <Toolbar style={{ backgroundColor:'#8e02b5'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Doctors Portal
              </Typography>
              <Link to="/appoinment" style={{textDecoration:'none',color:'white',marginRight:'10px'}}>
          Appoinment
              </Link>

              
              
              {user?.email ?
                <Box>
              <Link to="/dashboard" style={{textDecoration:'none',color:'white'}}>Dashboard</Link>
              <Button onClick={logout} color="inherit">Logout </Button>
                </Box>
                :
              <Link to="/login" style={{textDecoration:'none',color:'white'}}>Login</Link>
   
}

        </Toolbar>
      </AppBar>
    </Box> 
        </div>
    );
};

export default Navigation;