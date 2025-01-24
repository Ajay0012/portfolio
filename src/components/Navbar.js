import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, useTheme, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { motion, useScroll } from 'framer-motion';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange(() => setIsScrolled(scrollY.get() > 50));
  }, [scrollY]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = ['Home', 'Story', 'Projects', 'Lessons', 'Contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar 
        position="fixed" 
        sx={{
          bgcolor: isScrolled ? 'background.paper' : 'transparent',
          boxShadow: isScrolled ? 1 : 0,
          transition: 'all 0.3s'
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: isScrolled ? 'text.primary' : 'white' }}
          >
            Portfolio
          </Typography>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: isScrolled ? 'text.primary' : 'white' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  sx={{ 
                    color: isScrolled ? 'text.primary' : 'white',
                    '&:hover': {
                      color: 'primary.main',
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item} onClick={() => scrollToSection(item)}>
              <Button fullWidth>{item}</Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </motion.div>
  );
};

export default Navbar;
