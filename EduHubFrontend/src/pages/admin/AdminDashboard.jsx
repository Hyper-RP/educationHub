
import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AdminDashboard = () => (
  <Container sx={{ py: 8 }} maxWidth="md">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to the Admin Dashboard!
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        From here you can manage courses and users.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button component={Link} to="/admin/courses" variant="contained">
          Manage Courses
        </Button>
        <Button component={Link} to="/admin/users" variant="contained">
          Manage Users
        </Button>
      </Box>
    </motion.div>
  </Container>
);

export default AdminDashboard;
