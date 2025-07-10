
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, title: 'Introduction to React', description: 'Learn the fundamentals of React.' },
  { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JavaScript concepts.' },
  { id: 3, title: 'UI/UX Design Principles', description: 'Learn the principles of modern design.' },
];

const Courses = () => (
  <Container sx={{ py: 8 }} maxWidth="md">
    <Typography variant="h4" align="center" gutterBottom>
      Courses
    </Typography>
    <Grid container spacing={4}>
      {courses.map((course, index) => (
        <Grid item key={course.id} xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {course.title}
                </Typography>
                <Typography>
                  {course.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} to={`/course/${course.id}`} size="small">View Details</Button>
              </CardActions>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Courses;
