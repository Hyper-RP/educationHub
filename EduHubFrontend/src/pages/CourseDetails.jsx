
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';

const CourseDetails = () => {
  const { id } = useParams();

  // Placeholder for course data - in a real app, you'd fetch this from an API
  const course = {
    id: id,
    title: `Course ${id} Title`,
    description: `This is a detailed description for Course ${id}. It covers various aspects of the topic, providing in-depth knowledge and practical exercises.`,
    instructor: 'John Doe',
    duration: '10 hours',
    price: '$99.99',
  };

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" gutterBottom>
          {course.title}
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Instructor: {course.instructor}
        </Typography>
        <Typography variant="body1" paragraph>
          {course.description}
        </Typography>
        <Typography variant="body1" paragraph>
          Duration: {course.duration}
        </Typography>
        <Typography variant="h5" color="primary" paragraph>
          Price: {course.price}
        </Typography>
        <Button variant="contained" color="primary">
          Enroll Now
        </Button>
      </motion.div>
    </Container>
  );
};

export default CourseDetails;
