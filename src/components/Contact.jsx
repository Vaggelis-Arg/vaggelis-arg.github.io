import React, { useState, useEffect } from 'react';
import { Typography, Grid, IconButton, Box, TextField, Button, Snackbar, Alert, CircularProgress } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        emailjs.init("P8658nhejvoCtU-4V");
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            user_name: formData.name,
            user_email: formData.email,
            message: formData.message,
        };

        emailjs.send('service_ajegvq6', 'template_3sps9hl', templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setFormData({ name: '', email: '', message: '' });
                setSnackbarMessage('Message sent successfully!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
            }, (error) => {
                console.log('FAILED...', error);
                setSnackbarMessage('Failed to send message. Please try again.');
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <section
            id="contact"
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
                    color: '#6e6658',
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    letterSpacing: '0.1em',
                }}
            >
                Get in Touch
            </Typography>

            <Box
                sx={{
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#6e6658',
                    marginBottom: '40px',
                }}
            />

            <Typography
                variant="h5"
                align="center"
                gutterBottom
                sx={{
                    color: '#6e6658',
                    marginBottom: '20px',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                }}
            >
                Connect with me
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100vw',
                    marginBottom: '40px',
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
                            disableRipple
                            sx={{
                                '&:hover svg': {
                                    color: '#0077b5',
                                    transform: 'translateY(-5px)',
                                    transition: '0.3s ease-in-out',
                                },
                            }}
                        >
                            <LinkedIn sx={{ fontSize: 50, color: '#6e6658' }} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton
                            component="a"
                            href="https://github.com/Vaggelis-Arg"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            disableRipple
                            sx={{
                                '&:hover svg': {
                                    color: '#171515',
                                    transform: 'translateY(-5px)',
                                    transition: '0.3s ease-in-out',
                                },
                            }}
                        >
                            <GitHub sx={{ fontSize: 50, color: '#6e6658' }} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton
                            component="a"
                            href="mailto:vag.argyropoulos@gmail.com"
                            aria-label="Email"
                            disableRipple
                            sx={{
                                '&:hover svg': {
                                    color: '#d14836',
                                    transform: 'translateY(-5px)',
                                    transition: '0.3s ease-in-out',
                                },
                            }}
                        >
                            <Email sx={{ fontSize: 50, color: '#6e6658' }} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>

            <Typography
                variant="h6"
                align="center"
                sx={{
                    color: '#6e6658',
                    fontSize: '1.5rem',
                    marginBottom: '20px',
                    fontStyle: 'italic',
                }}
            >
                Or, send me a message
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    width: '100%',
                    maxWidth: '600px',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#d8c3a5',
                    borderRadius: '15px',
                    padding: '30px',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                }}
            >
                <TextField
                    name="name"
                    label="Your Name"
                    variant="outlined"
                    onChange={handleChange}
                    value={formData.name}
                    fullWidth
                    sx={{
                        marginBottom: '20px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#6e6658',
                            },
                            '&:hover fieldset': {
                                borderColor: '#6e6658',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#6e6658',
                            },
                        },
                        '& label': {
                            color: '#6e6658',
                        },
                    }}
                    InputLabelProps={{ style: { color: '#6e6658' } }}
                    required
                />
                <TextField
                    name="email"
                    label="Your Email"
                    variant="outlined"
                    onChange={handleChange}
                    value={formData.email}
                    fullWidth
                    sx={{
                        marginBottom: '20px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#6e6658',
                            },
                            '&:hover fieldset': {
                                borderColor: '#6e6658',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#6e6658',
                            },
                        },
                        '& label': {
                            color: '#6e6658',
                        },
                    }}
                    InputLabelProps={{ style: { color: '#6e6658' } }}
                    required
                />
                <TextField
                    name="message"
                    label="Your Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    onChange={handleChange}
                    value={formData.message}
                    fullWidth
                    sx={{
                        marginBottom: '20px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#6e6658',
                            },
                            '&:hover fieldset': {
                                borderColor: '#6e6658',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#6e6658',
                            },
                        },
                        '& label': {
                            color: '#6e6658',
                        },
                    }}
                    InputLabelProps={{ style: { color: '#6e6658' } }}
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: '#6e6658',
                        color: '#eae7dc',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: '#8a7f70',
                        },
                        padding: '10px',
                        fontSize: '1.1rem',
                    }}
                >
                    {loading ? (
                        <CircularProgress size={24} sx={{ color: '#eae7dc', marginRight: '10px' }} />
                    ) : null}
                    Send Message
                </Button>
            </Box>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={4000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </section>
    );
};

export default Contact;
