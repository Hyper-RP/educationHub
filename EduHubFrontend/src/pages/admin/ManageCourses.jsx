
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const ManageCourses = () => (
  <Container sx={{ py: 8 }} maxWidth="md">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Manage Courses
      </Typography>
      <Typography variant="body1" align="center">
        Here you can add, edit, or delete courses.
      </Typography>
    </motion.div>
  </Container>
);

export default ManageCourses;
