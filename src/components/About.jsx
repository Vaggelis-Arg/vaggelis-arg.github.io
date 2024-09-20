import React from 'react';
import { Container, Typography, Box, useMediaQuery } from '@mui/material';

const About = () => {
    const isSmallScreen = useMediaQuery(`(max-width: ${2 * 330 + 64}px)`); // 330px minWidth * 2 boxes + 64px gap

    return (
        <section
        id="about"
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 0',
            position: 'relative',
            zIndex: 1,
            width: '100%',
            margin: '0 0 10rem 0',
        }}
        >
        <Container
            maxWidth={false}
            style={{
            paddingLeft: '0',
            paddingRight: '0',
            }}
        >
            <Box
            display="flex"
            justifyContent="center"
            alignItems="stretch"
            sx={{
                gap: '4rem',
                flexDirection: isSmallScreen ? 'column' : 'row',
            }}
            >
            <Box
                sx={{
                width: { xs: '100%', md: '35%' },
                minWidth: '330px',
                backgroundColor: '#d8c3a5',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '1.2rem',
                        fontFamily: 'Poppins, sans-serif',
                        color: '#6e6658',
                    }}
                >
                    Full Name: Evangelos Argyropoulos
                </Typography>
                <Typography
                    sx={{
                        fontSize: '1.2rem',
                        fontFamily: 'Poppins, sans-serif',
                        color: '#6e6658',
                    }}
                >
                    Location: Athens, Greece
                </Typography>
                <Typography
                sx={{
                    fontSize: '1.2rem',
                    fontFamily: 'Poppins, sans-serif',
                    color: '#6e6658',
                }}
                >
                    Email: vag.argyropoulos@gmail.com
                </Typography>
            </Box>

            <Box
                sx={{
                width: { xs: '100%', md: '55%' },
                minWidth: '330px',
                backgroundColor: '#d8c3a5',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                textAlign: 'left',
                }}
            >
                <Typography
                    component="h1"
                    gutterBottom
                    sx={{
                        color: '#6e6658',
                        fontSize: '2.5rem',
                        fontFamily: 'Poppins, sans-serif',
                    }}
                    >
                        About Me
                </Typography>
                <Typography
                    paragraph
                    sx={{
                        color: '#6e6658',
                        fontFamily: 'Poppins, sans-serif',
                    }}
                    >
                        Hello, I'm Vaggelis, and this is my personal website.
                        I was born in Athens in January 2004.
                        After finishing school in 2022, I took the Panhellenic Exams to pursue a degree in Computer Science at the University of Athens.
                </Typography>
                <Typography
                    paragraph
                    sx={{
                        color: '#6e6658',
                        fontFamily: 'Poppins, sans-serif',
                    }}
                    >
                        I'm passionate about computer science and its intersection with business. My goal is to gain skills that will help me develop and improve practical technology applications.
                </Typography>
            </Box>
            </Box>
        </Container>
        </section>
    );
};

export default About;
