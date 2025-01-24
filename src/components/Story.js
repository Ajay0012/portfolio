import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timelineEvents = [
  {
    year: '2023',
    title: 'A New Chapter',
    description: 'Started my college journey in September, diving into foundational courses in Artificial Intelligence.'
  },
  {
    year: '2024',
    title: 'The Beginning',
    description: 'Explored new technologies such as programming, artificial intelligence, and data science.'
  },
  {
    year: '2025',
    title: 'Growth & Learning',
    description: 'Participated in my first hackathon and started building personal projects.'
  },
];

const Story = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      id="story"
      sx={{
        py: 10,
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'primary.main',
          }}
        >
          My Story
        </Typography>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {timelineEvents.map((event, index) => (
            <motion.div key={event.year} variants={itemVariants}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  mb: 4,
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: { xs: '20px', sm: '50%' },
                    top: '-20px',
                    height: index === 0 ? 0 : '20px',
                    width: '2px',
                    bgcolor: 'primary.main',
                    display: { xs: 'none', sm: 'block' },
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: 'primary.main',
                    mr: { xs: 0, sm: 4 },
                    mb: { xs: 2, sm: 0 },
                    minWidth: '100px',
                  }}
                >
                  {event.year}
                </Typography>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    {event.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {event.description}
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Story;
