import React from 'react';
import { Container, Grid, Typography, Box, Avatar } from '@mui/material';
import profilePicture from '../assets/profile-image.jpg';

const Home = () => {
  return (
    <section
      id="home"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        padding: '2rem',
        backgroundColor: '#eae7dc',
        marginTop: '-5vh',
        zIndex: 1,
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              src={profilePicture}
              alt="Evangelos Argyropoulos"
              sx={{
                width: '100%',
                maxWidth: '250px',
                height: 'auto',
                display: 'block',
              }}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <Box textAlign="center">
              <Typography
                component="h1"
                gutterBottom
                sx={{
                  color: '#6e6658',
                  fontSize: '3rem',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Hi, I'm Vaggelis Argyropoulos
              </Typography>
              <Typography paragraph sx={{ color: '#6e6658', fontFamily: 'Poppins, sans-serif' }}>
                I'm a third-year undergraduate student in the Department of Informatics and Telecommunications at the University of Athens.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Home;
