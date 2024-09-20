import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import personalLogo from '../assets/personal-logo.drawio.png';

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: '#6e6658',
        boxShadow: 'none',
        borderBottom: '1px solid #eae7dc',
        zIndex: 3,
        height: '50px',
        justifyContent: 'center',
        padding: '0 20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box
          component={Link}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src={personalLogo}
            alt="Personal Logo"
            style={{ height: '35px', marginRight: '20px' }}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            component={Link}
            to="/"
            sx={{
              color: '#eae7dc',
              textTransform: 'none',
              '&:hover': { color: '#d8c3a5' },
              mx: 1,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/resume"
            sx={{
              color: '#eae7dc',
              textTransform: 'none',
              '&:hover': { color: '#d8c3a5' },
              mx: 1,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
            }}
          >
            Resume
          </Button>
          <Button
            component={Link}
            to="/projects"
            sx={{
              color: '#eae7dc',
              textTransform: 'none',
              '&:hover': { color: '#d8c3a5' },
              mx: 1,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
            }}
          >
            Projects
          </Button>
          <Button
            component={Link}
            to="/contact"
            sx={{
              color: '#eae7dc',
              textTransform: 'none',
              '&:hover': { color: '#d8c3a5' },
              mx: 1,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '14px',
            }}
          >
            Contact
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
