
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => (
  <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    <Container maxWidth="lg">
      <Typography variant="h6" align="center" gutterBottom>
        EduHub
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        An advanced e-learning platform.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
