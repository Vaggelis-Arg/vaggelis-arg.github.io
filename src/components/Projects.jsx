import React, { useState } from 'react';
import { Typography, Card, CardContent, Box, ImageList, ImageListItem, useMediaQuery, Dialog } from '@mui/material';
import beconnectedFeed from '../assets/beconnected-feed.png';
import beconnectedJobs from '../assets/beconnected-jobs.png';
import beconnectedProfile from '../assets/beconnected-profile.png';
import beconnectedMessages from '../assets/beconnected-messages.png';
import beconnectedNetwork from '../assets/beconnected-network.png';
import beconnectedNotifications from '../assets/beconnected-notifications.png';
import beconnectedConnections from '../assets/beconnected-connections.png';
import beconnectedSettings from '../assets/beconnected-settings.png';
import LinkIcon from '@mui/icons-material/Link';
import DataObjectIcon from '@mui/icons-material/DataObject';

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

    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClickOpen = (img) => {
        setSelectedImage(img);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    return (
        <section
            id="projects"
            style={{
                backgroundColor: '#eae7dc',
                minHeight: '100vh',
                padding: '50px 20px',
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
                    gap: '30px',
                    alignItems: 'stretch',
                    flexDirection: isSmallScreen ? 'column' : 'row',
                    flexWrap: 'wrap',
                    '& > *': {
                        flexBasis: isSmallScreen ? '100%' : '34%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: isSmallScreen ? '100%' : 'auto',
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
                        '&:hover': {
                                    transform: 'scale(1.01)',
                                    transition: 'transform 0.3s ease-in-out',
                                },
                    }}
                >
                    <a href="https://github.com/Vaggelis-Arg/beconnected" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <CardContent>
                        <Typography
                            variant="h4"
                            noWrap
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: '#0a66c2',
                                textDecoration: 'none',
                                fontSize: isSmallScreen ?  '2.5rem' : {xs: '1.2rem', md: '2.5rem'},
                                lineHeight: '1.2',
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
                                    width: '3.5rem',
                                    height: '3.5rem',
                                    mr: 0.5,
                                    ml: 0.5,
                                }}
                            >
                                <LinkIcon
                                    sx={{
                                        fontSize: {md: '2.75rem'},
                                        color: '#d8c3a5',
                                    }}
                                />
                            </Box>
                            Connected
                        </Typography>
                            <Typography
                                paragraph
                                sx={{
                                    color: '#6e6658',
                                    fontFamily: 'Poppins, sans-serif',
                                    marginTop: '1.5rem',
                                }}
                            >
                                BeConnected is a professional networking app, similar to LinkedIn, that my classmate and I developed as part
                                of the Internet Technologies and Applications course at the National and Kapodistrian University of Athens.
                                The app features two roles: Administrators, who manage users and export data, and Professionals, who manage
                                their profiles, connections, and content. BeConnected is built on a client-server model, utilizing Spring Boot
                                and MySQL for the server side and React with JavaScript for the client side.
                            </Typography>
                        </CardContent>
                    </a>
                    <>
                    <ImageList
                    sx={{
                        width: '100%',
                        marginTop: '20px',
                        gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                        gap: 3,
                    }}
                    cols={2} 
                    gap={2}
                >
                    {itemData.map((item) => (
                        <ImageListItem
                            key={item.img}
                            sx={{
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: 3,
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease',
                                '&:hover': isSmallScreen
                                ? {
                                    '& .overlay': {
                                        opacity: 1,
                                    },
                                }
                                : {
                                    transform: 'scale(1.05)',
                                    '& .overlay': {
                                        opacity: 1,
                                    },
                                },
                            }}
                            onClick={() => handleClickOpen(item.img)}
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                            <Box
                                className="overlay"
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    textAlign: 'center',
                                    fontFamily: 'Poppins, sans-serif',
                                }}
                            >
                                <Typography variant="body2">{item.title}</Typography>
                            </Box>
                        </ImageListItem>
                    ))}
                </ImageList>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    maxWidth="lg"
                    fullWidth={false}
                    PaperProps={{
                        sx: { width: '80%', height: 'auto' },
                    }}
                >
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Selected"
                        />
                    )}
                </Dialog>
                </>
                </Card>
                <Card
                    sx={{
                        backgroundColor: '#d8c3a5',
                        color: '#4a4a44',
                        boxShadow: 8,
                        padding: '20px',
                        textAlign: 'center',
                        borderRadius: 0,
                        '&:hover': {
                                    transform: 'scale(1.01)',
                                    transition: 'transform 0.3s ease-in-out',
                                },
                    }}
                >
                    <a href="https://github.com/Vaggelis-Arg/C-data-structures" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 2,
                                }}
                            >
                                <DataObjectIcon
                                    sx={{
                                        fontSize: { md: '3.2rem' },
                                        color: '#4a4a44',
                                        mr: 1,
                                    }}
                                />
                                <Typography
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        fontSize: { md: '2.2rem' },
                                        fontWeight: 700,
                                        fontFamily: 'monospace',
                                        color: '#4a4a44',
                                    }}
                                >
                                    C-data-structures
                                </Typography>
                            </Box>

                            <Typography
                                paragraph
                                sx={{
                                    color: '#6e6658',
                                    fontFamily: 'Poppins, sans-serif',
                                    marginTop: '2.5rem',
                                }}
                            >
                                A collection of various data structures implemented in C using void pointers and macros.
                                Each data structure in this project is designed to provide efficient and flexible solutions to common
                                programming challenges. The use of void pointers and macros allows for a generic implementation that can
                                handle different types of data.
                            </Typography>
                            <Typography
                                paragraph
                                sx={{
                                    color: '#6e6658',
                                    fontFamily: 'Poppins, sans-serif',
                                    marginTop: '1rem',
                                }}
                            >
                                The project includes the following data structures:
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px',
                                    marginTop: '1rem',
                                }}
                            >
                                {['AVL tree', 'Bloom Filter', 'Double Hashing Hash Table', 'Double Linked List', 'Priority Queue', 'Queue', 'Red Black Tree', 'Separate Chaining Hash Table', 'Skip List', 'Stack', 'Vector'].map((item) => (
                                    <Box
                                        key={item}
                                        sx={{
                                            color: '#6e6658',
                                            fontFamily: 'Poppins, sans-serif',
                                            textAlign: 'center',
                                            boxShadow: 'none',
                                        }}
                                    >
                                        {item}
                                    </Box>
                                ))}
                            </Box>
                        </CardContent>
                    </a>
                </Card>
            </Box>
        </section>
    );
};

export default Projects;
