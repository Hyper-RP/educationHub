
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
        EduHub
      </Typography>
      <Button color="inherit" component={Link} to="/courses">Courses</Button>
      <Button color="inherit" component={Link} to="/user/signin">Sign In</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
