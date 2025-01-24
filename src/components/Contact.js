import React from 'react';
import { Box, Container, Typography, Grid, Paper, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Email, LinkedIn, GitHub, Instagram } from '@mui/icons-material';

const contactMethods = [
  {
    name: 'Email',
    icon: Email,
    link: 'ajaysanjay948@gmail.com',
    color: '#EA4335',
  },
  {
    name: 'LinkedIn',
    icon: LinkedIn,
    link: 'https://www.linkedin.com/in/ajay-d-880a29283/',
    color: '#0A66C2',
  },
  {
    name: 'GitHub',
    icon: GitHub,
    link: 'https://github.com/Ajay0012',
    color: '#24292E',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    link: 'https://www.instagram.com/ajxy.d_/',
    color: '#E1306C',
  },
];

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        bgcolor: 'background.paper',
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
          Let's Connect
        </Typography>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Grid container spacing={3} justifyContent="center">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Grid item xs={6} sm={3} key={method.name}>
                  <Paper
                    sx={{
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <IconButton
                      component="a"
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: method.color,
                        '&:hover': {
                          bgcolor: `${method.color}15`,
                        },
                      }}
                    >
                      <Icon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Typography
                      variant="body1"
                      sx={{
                        mt: 1,
                        color: 'text.secondary',
                      }}
                    >
                      {method.name}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary">
            I'm always open to new opportunities and collaborations.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Feel free to reach out!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
