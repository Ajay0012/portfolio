import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { School, Psychology, GroupWork } from '@mui/icons-material';

const lessons = [
  {
    title: 'Continuous Learning',
    description: 'Embracing new technologies and methodologies to stay ahead in the ever-evolving tech landscape.',
    icon: School,
  },
  {
    title: 'Problem Solving',
    description: 'Developing creative solutions and thinking outside the box to overcome complex challenges.',
    icon: Psychology,
  },
  {
    title: 'Collaboration',
    description: 'Working effectively in teams and learning from diverse perspectives to achieve common goals.',
    icon: GroupWork,
  },
];

const Lessons = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="lessons"
      sx={{
        py: 10,
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'primary.main',
          }}
        >
          Lessons Learned
        </Typography>

        <Grid container spacing={4} ref={ref}>
          {lessons.map((lesson, index) => {
            const Icon = lesson.icon;
            return (
              <Grid item xs={12} md={4} key={lesson.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      <Icon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {lesson.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {lesson.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Lessons;
