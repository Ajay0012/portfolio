import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Link, IconButton } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import project1Image from '../assets/images/1.jpg';
import project2Image from '../assets/images/2.jpg';
import project3Image from '../assets/images/3.jpg';

const projects = [
  {
    title: 'Data Cleaning Tool',
    description: 'It is a web-based application that streamlines data preprocessing with features like missing value handling, outlier detection, and categorical encoding',
    image: project1Image,
    technologies: ['HTML', 'Bootstrap', 'JavaScript'],
  },
  {
    title: 'Real-Time News Recommendation System ',
    description: 'analyzes user trends and sentiment to provide personalized news recommendations.',
    image: project2Image,
    technologies: ['Java (Eclipse)', 'MySQL Workbench'],
  },
  {
    title: 'AITALYTICS',
    description: 'It is an AI-driven platform that simplifies data analysis and decision-making with advanced AI solutions.(Startup)',
    image: project3Image,
    technologies: ['TensorFlow', 'MongoDB', 'GraphQL'],
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="projects"
      sx={{
        py: 10,
        bgcolor: 'background.paper',
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
          Projects That Define Me
        </Typography>

        <Grid container spacing={4} ref={ref}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{ mr: 1, mb: 1 }}
                        />
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton
                        component={Link}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                      >
                        <GitHub />
                      </IconButton>
                      <IconButton
                        component={Link}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                      >
                        <Launch />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
