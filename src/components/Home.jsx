import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, Button, Avatar, useMediaQuery } from '@mui/material';
import profilePicture from '../assets/profile-image2.jpg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Home = () => {
    const isSmallScreen = useMediaQuery('(max-width:870px)');
    const [navbarHeight, setNavbarHeight] = useState(50);

    useEffect(() => {
        const navbar = document.querySelector('header.MuiAppBar-root');
        if (navbar) {
            setNavbarHeight(navbar.offsetHeight);
        }
    }, []);

    const scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    };

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
                paddingTop: `${navbarHeight + 4.7}px`,
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
                                maxWidth: isSmallScreen ? '227px' : '286.5px',
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
                                    fontSize: isSmallScreen ? '2.15rem' : '3rem',
                                    fontFamily: 'Poppins, sans-serif',
                                    animation: 'fadeInUp 1.2s ease forwards',
                                    '@keyframes fadeInUp': {
                                        '0%': { opacity: 0, transform: 'translateY(10px)' },
                                        '100%': { opacity: 1, transform: 'translateY(0)' },
                                    },
                                }}
                            >
                                Hi, I'm Vaggelis Argyropoulos
                            </Typography>
                            <Typography paragraph sx={{
                                color: '#6e6658',
                                fontFamily: 'Poppins, sans-serif',
                                animation: 'fadeInUp 1.2s ease forwards',
                                '@keyframes fadeInUp': {
                                    '0%': { opacity: 0, transform: 'translateY(10px)' },
                                    '100%': { opacity: 1, transform: 'translateY(0)' },
                                },
                            }}>
                                I'm a computer science engineer working on efficient machine learning systems.
                            </Typography>

                            <Box 
                                sx={{
                                    textAlign: 'center',
                                    marginTop: isSmallScreen ? '1.4rem' : '1.7rem',
                                }}
                            >
                                <Button
                                    variant="contained"
                                    onClick={scrollToAbout}
                                    endIcon={<ExpandMoreIcon />}
                                    sx={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: '50px',
                                        backgroundColor: '#6e6658',
                                        color: '#eae7dc',
                                        fontSize: '0.9rem',
                                        fontFamily: 'Poppins, sans-serif',
                                        textTransform: 'none',
                                        transition: 'all 0.2s ease',
										animation: 'fadeInUp 1.2s ease forwards',
                                        '@keyframes fadeInUp': {
                                            '0%': { opacity: 0, transform: 'translateY(10px)' },
                                            '100%': { opacity: 1, transform: 'translateY(0)' },
                                        },
                                        '&:hover': {
                                            backgroundColor: '#8d8470',
                                            transform: 'translateY(-1px)',
                                        },
                                    }}
                                >
                                    About Me
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Home;
