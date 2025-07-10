
import React from 'react';
import { Box, Typography, Container, Avatar, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const UserProfile = () => {
  // Placeholder user data
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    bio: 'Passionate learner and aspiring web developer.',
    avatar: 'https://via.placeholder.com/150',
  };

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper elevation={3} sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar
            alt={user.name}
            src={user.avatar}
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          <Typography variant="h4" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            {user.email}
          </Typography>
          <Typography variant="body1" align="center">
            {user.bio}
          </Typography>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default UserProfile;
