import React from 'react';
import { Typography, Grid, IconButton, Box } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

const Contact = () => {
    return (
        <section
            id="projects"
            style={{
                backgroundColor: '#eae7dc',
                minHeight: '100vh',
                padding: '50px',
                fontFamily: 'Poppins, sans-serif',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                    marginBottom: '40px',
                    marginTop: '70px',
                    fontFamily: 'Poppins, sans-serif',
                    color: '#6e6658',
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    letterSpacing: '0.1em',
                }}
            >
                Let's Connect!
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    borderTop: '2px solid #6e6658',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    marginBottom: '60px',
                }}
            >
                <Grid container justifyContent="center" spacing={4}>
                    <Grid item>
                        <IconButton
                            component="a"
                            href="https://www.linkedin.com/in/vaggelis-argyropoulos"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            sx={{
                                '&:hover': {
                                    transform: 'scale(1.2)',
                                    transition: 'transform 0.3s ease-in-out',
                                },
                            }}
                        >
                            <LinkedIn sx={{ color: '#6e6658', fontSize: 60 }} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton
                            component="a"
                            href="https://github.com/Vaggelis-Arg"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            sx={{
                                '&:hover': {
                                    transform: 'scale(1.2)',
                                    transition: 'transform 0.3s ease-in-out',
                                },
                            }}
                        >
                            <GitHub sx={{ color: '#6e6658', fontSize: 60 }} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton
                            component="a"
                            href="mailto:vag.argyropoulos@gmail.com"
                            aria-label="Email"
                            sx={{
                                '&:hover': {
                                    transform: 'scale(1.2)',
                                    transition: 'transform 0.3s ease-in-out',
                                },
                            }}
                        >
                            <Email sx={{ color: '#6e6658', fontSize: 60 }} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
            <Typography
                variant="body1"
                align="center"
                sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.2rem',
                    color: '#6e6658',
                    letterSpacing: '0.05em',
                }}
            >
                Feel free to reach out for collaborations or just a friendly hello!
            </Typography>
        </section>
    );
};

export default Contact;
