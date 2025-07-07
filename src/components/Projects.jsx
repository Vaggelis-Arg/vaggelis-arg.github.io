import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardContent,
  Box,
  Grid,
  useMediaQuery,
  Button,
} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SyncIcon from '@mui/icons-material/Sync';
import { styled } from '@mui/system';
import babyPicture from '../assets/baby-picture.png';


const LogoContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '10px',
}));
const Logo = styled('div')({
  width: '40px',
  height: '40px',
  overflow: 'hidden',
  borderRadius: '50%',
});
const LogoImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
const LogoText = styled('span')({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  fontFamily: 'Poppins, sans-serif',
  color: '#000',
});

const Projects = () => {
  const isSmallScreen = useMediaQuery('(max-width:750px)');

  return (
    <section
      id="projects"
      style={{
        backgroundColor: '#eae7dc',
        minHeight: '100vh',
        padding: '40px 30px',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          marginBottom: '40px',
          marginTop: '70px',
          color: '#6e6658',
          fontSize: '2rem',
          letterSpacing: '0.1em',
        }}
      >
        Projects
      </Typography>

      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              backgroundColor: '#d8c3a5',
              color: '#6e6658',
              boxShadow: 8,
              p: 1.5,
              textAlign: 'center',
              borderRadius: 0,
              height: '100%',
              '&:hover': {
                transform: 'scale(1.01)',
                transition: 'transform 0.3s',
              },
            }}
          >
            <a
              href="https://github.com/Vaggelis-Arg/beconnected"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  noWrap
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: '#0a66c2',
                    fontSize: isSmallScreen ? '1.5rem' : '1.8rem',
                    lineHeight: 1.2,
                  }}
                >
                  Be
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '20%',
                      bgcolor: '#0a66c2',
                      width: isSmallScreen ? '2.2rem' : '3rem',
                      height: isSmallScreen ? '2.2rem' : '3rem',
                      mx: 0.5,
                    }}
                  >
                    <LinkIcon sx={{ fontSize: isSmallScreen ? '1.5rem' : '2rem', color: '#d8c3a5' }} />
                  </Box>
                  Connected
                </Typography>
                <Typography
                  sx={{
                    color: '#6e6658',
                    fontFamily: 'Poppins, sans-serif',
                    mt: 1.5,
                    textAlign: 'left',
                    fontSize: '0.95rem',
                  }}
                >
                  BeConnected is a professional networking app, similar to LinkedIn,
                  developed during the Internet Technologies & Applications course at NKUA.
                  Administrators manage users and exports; Professionals manage their
                  profiles, connections, and content. Built with Spring Boot, MySQL,
                  React and JavaScript.
                </Typography>
              </CardContent>
            </a>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              backgroundColor: '#d8c3a5',
              color: '#6e6658',
              boxShadow: 8,
              p: 1.5,
              textAlign: 'center',
              borderRadius: 0,
              height: '100%',
              '&:hover': {
                transform: 'scale(1.01)',
                transition: 'transform 0.3s',
              },
            }}
          >
            <a
              href="https://github.com/Vaggelis-Arg/Amazon-Ecommerce-Analysis"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <CardContent>
                <ShoppingCartIcon sx={{ fontSize: 40, color: '#4a4a44', mb: 1 }} />
                <Typography
				variant="h5"
				sx={{
					fontFamily: 'monospace',
					fontWeight: 700,
					color: '#4a4a44',
					whiteSpace: 'normal',
					wordBreak: 'break-word',
				}}
				>
				Amazon Ecommerce Analysis
				</Typography>
                <Typography
                  sx={{
                    color: '#6e6658',
                    fontFamily: 'Poppins, sans-serif',
                    mt: 1.5,
                    textAlign: 'left',
                    fontSize: '0.9rem',
                  }}
                >
                  A data mining project analyzing Amazon product reviews, covering
                  sentiment analysis, recommendation systems, and clustering using Python
                  and machine learning. Processes JSON data, extracts insights, and builds
                  ML models for e-commerce trends.
                </Typography>
              </CardContent>
            </a>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              backgroundColor: '#d8c3a5',
              color: '#6e6658',
              boxShadow: 8,
              p: 1.5,
              textAlign: 'center',
              borderRadius: 0,
              height: '100%',
              '&:hover': {
                transform: 'scale(1.01)',
                transition: 'transform 0.3s',
              },
            }}
          >
            <a
              href="https://github.com/Vaggelis-Arg/FileSync-Systems"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <CardContent>
                <SyncIcon sx={{ fontSize: 40, color: '#4a4a44', mb: 1 }} />
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: '#4a4a44',
                  }}
                >
                  FileSync Systems
                </Typography>
                <Typography
                  sx={{
                    color: '#6e6658',
                    fontFamily: 'Poppins, sans-serif',
                    mt: 1.5,
                    textAlign: 'left',
                    fontSize: '0.9rem',
                  }}
                >
                  Projects from my 3rd-year Systems Programming course at the National & Kapodistrian
                  University of Athens.<br/><br/>
                  • <strong>FSS</strong>: Synchronizes local directories with inotify, fork/exec, and named pipes.<br/>
                  • <strong>NFS</strong>: Synchronizes remote directories over TCP sockets & threads.
                </Typography>
              </CardContent>
            </a>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              backgroundColor: '#d8c3a5',
              color: '#6e6658',
              boxShadow: 8,
              p: 1.5,
              textAlign: 'center',
              borderRadius: 0,
              height: '100%',
              '&:hover': {
                transform: 'scale(1.01)',
                transition: 'transform 0.3s',
              },
            }}
          >
            <a
              href="https://github.com/Vaggelis-Arg/GovGR-Babysitting-Website-Redesign"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <CardContent>
                <LogoContainer>
                  <Logo>
                    <LogoImage src={babyPicture} alt="Baby" />
                  </Logo>
                  <LogoText>Babysitters-Website</LogoText>
                </LogoContainer>
                <Typography
                  sx={{
                    color: '#6e6658',
                    fontFamily: 'Poppins, sans-serif',
                    mt: 1.5,
                    textAlign: 'left',
                    fontSize: '0.9rem',
                  }}
                >
                  The Babysitters website helps families find babysitters in their local area and allows babysitters
                  to offer their services. Parents can search based on location, child age, and availability, while
                  babysitters list skills, experience, and schedules. Features include profile management, scheduling,
                  payment handling, appointment booking, and reviews.
                </Typography>
              </CardContent>
            </a>
          </Card>
        </Grid>
      </Grid>
	  <Box
		sx={{
			display: 'flex',
			justifyContent: 'center',
			mt: 5,
		}}
		>
		<Button
			variant="outlined"
			color="secondary"
			href="https://github.com/Vaggelis-Arg"
			target="_blank"
			startIcon={<GitHubIcon />}
			sx={{
			borderColor: '#6e6658',
			color: '#6e6658',
			'&:hover': {
				backgroundColor: '#6e6658',
				color: '#ffffff',
			},
			fontFamily: 'Poppins, sans-serif',
			fontWeight: 600,
			textTransform: 'none',
			}}
		>
			View all my projects on GitHub
		</Button>
		</Box>
    </section>
  );
};

export default Projects;
