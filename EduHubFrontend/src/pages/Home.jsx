
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => (
  <Box sx={{ pt: 8, pb: 6 }}>
    <Container maxWidth="sm">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Welcome to EduHub
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Your gateway to knowledge and skills. Explore our wide range of courses.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button component={Link} to="/courses" variant="contained">
            Explore Courses
          </Button>
        </Box>
      </motion.div>
    </Container>
  </Box>
);

export default Home;
