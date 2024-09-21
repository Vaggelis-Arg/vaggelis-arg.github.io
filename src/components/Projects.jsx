import React from 'react';
import { Typography, Card, CardContent, Box, ImageList, ImageListItem, useMediaQuery } from '@mui/material';
import beconnectedFeed from '../assets/beconnected-feed.png';
import beconnectedJobs from '../assets/beconnected-jobs.png';
import beconnectedProfile from '../assets/beconnected-profile.png';
import beconnectedMessages from '../assets/beconnected-messages.png';
import beconnectedNetwork from '../assets/beconnected-network.png';
import beconnectedNotifications from '../assets/beconnected-notifications.png';
import beconnectedConnections from '../assets/beconnected-connections.png';
import beconnectedSettings from '../assets/beconnected-settings.png';

const Projects = () => {
    const isSmallScreen = useMediaQuery(`(max-width: 750px)`);
    const itemData = [
        { img: beconnectedFeed, title: 'Feed' },
        { img: beconnectedJobs, title: 'Jobs' },
        { img: beconnectedProfile, title: 'Profile' },
        { img: beconnectedMessages, title: 'Messages' },
        { img: beconnectedNetwork, title: 'Network' },
        { img: beconnectedNotifications, title: 'Notifications' },
        { img: beconnectedConnections, title: 'Connections' },
        { img: beconnectedSettings, title: 'Settings' }
    ];

    return (
        <section
            id="projects"
            style={{
                backgroundColor: '#eae7dc',
                minHeight: '100vh',
                padding: '50px',
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
                    fontFamily: 'Poppins, sans-serif',
                    color: '#6e6658',
                    fontSize: '2rem',
                    letterSpacing: '0.1em',
                }}
            >
                Projects
            </Typography>
            
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    alignItems: 'stretch',
                    flexDirection: isSmallScreen ? 'column' : 'row',
                    flexWrap: 'wrap',
                    '& > *': {
                        flexBasis: isSmallScreen ? '100%' : '37%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    },
                }}
            >
                <Card
                    sx={{
                        backgroundColor: '#d8c3a5',
                        color: '#6e6658',
                        boxShadow: 8,
                        padding: '20px',
                        textAlign: 'center',
                        borderRadius: 0,
                    }}
                >
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', fontFamily: 'Merriweather, serif' }}>
                            BeConnected
                        </Typography>
                        <Typography
                            paragraph
                            sx={{
                                color: '#6e6658',
                                fontFamily: 'Poppins, sans-serif',
                                marginTop: '1rem',
                            }}
                        >
                            BeConnected is a professional networking app, similar to LinkedIn, that my classmate and I developed as part
                            of the Internet Technologies and Applications course at the National and Kapodistrian University of Athens.
                            The app features two roles: Administrators, who manage users and export data, and Professionals, who manage
                            their profiles, connections, and content. BeConnected is built on a client-server model, utilizing Spring Boot
                            and MySQL for the server side and React with JavaScript for the client side.
                        </Typography>
                    </CardContent>

                    <ImageList
                        sx={{ width: '100%', marginTop: '20px' }} 
                        cols={3} 
                        gap={4} 
                    >
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                                />
                                <Typography align="center" variant="body2" sx={{ color: '#6e6658', marginTop: '5px' }}>
                                    {item.title}
                                </Typography>
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Card>

                <Card
                    sx={{
                        backgroundColor: '#d8c3a5',
                        color: '#6e6658',
                        boxShadow: 8,
                        padding: '20px',
                        textAlign: 'center',
                        borderRadius: 0,
                    }}
                >
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', fontFamily: 'Merriweather, serif' }}>
                            C-data-structures
                        </Typography>
                        <Typography
                            paragraph
                            sx={{
                                color: '#6e6658',
                                fontFamily: 'Poppins, sans-serif',
                                marginTop: '1rem',
                            }}
                        >
                            A collection of various data structures implemented in C using void pointers and macros.
                            Each data structure in this project is designed to provide efficient and flexible solutions to common
                            programming challenges. The use of void pointers and macros allows for a generic implementation that can
                            handle different types of data.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </section>
    );
};

export default Projects;
