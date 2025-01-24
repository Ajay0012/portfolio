import React from 'react';
import { Box, Typography, Container, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { KeyboardArrowDown } from '@mui/icons-material';
import profileImage from '../assets/images/profile.jpg';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #2a9d8f 0%, #e9c46a 100%)',
        color: 'white',
        position: 'relative',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: 4,
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Avatar
                src={profileImage}
                alt="Profile Photo"
                sx={{
                  width: 200,
                  height: 200,
                  border: '4px solid white',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                  mb: 3,
                }}
              />
            </motion.div>
          </Box>

          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              mb: 3,
            }}
          >
            AJAY D
          </Typography>

          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              mb: 3,
            }}
          >
            Welcome to My Journey
          </Typography>

          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              mb: 5,
              opacity: 0.9,
            }}
          >
            Exploring Creativity, Technology, and Innovation
          </Typography>
        </motion.div>
      </Container>

      <motion.div
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <KeyboardArrowDown sx={{ fontSize: 40 }} />
      </motion.div>
    </Box>
  );
};

export default Hero;
