import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import personalLogo from '../assets/personal-logo.png';

const Navbar = () => {
    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(false);

    const handleNavigate = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
        setOpenMenu(false);
    };

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const menuOptions = [
        { label: 'Home', path: '/' },
        { label: 'Resume', path: '/resume' },
        { label: 'Projects', path: '/projects' },
        { label: 'Contact', path: '/contact' },
    ];

    return (
        <>
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
                    <Box sx={{ display: 'flex' }}>
                        <img
                            src={personalLogo}
                            alt="Personal Logo"
                            style={{ height: '35px', marginRight: '20px' }}
                        />
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {menuOptions.map((option) => (
                            <Button
                                key={option.label}
                                onClick={() => handleNavigate(option.path)}
                                sx={{
                                    color: '#eae7dc',
                                    textTransform: 'none',
                                    '&:hover': { color: '#d8c3a5' },
                                    mx: 1,
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '14px',
                                }}
                            >
                                {option.label}
                            </Button>
                        ))}
                    </Box>
                    <IconButton
                        sx={{ display: { xs: 'block', md: 'none' }, color: '#eae7dc' }}
                        onClick={toggleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </AppBar>
            <Box
                sx={{
                    bgcolor: '#6e6658',
                    position: 'fixed',
                    top: '50px',
                    right: 0,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px 20px',
                    zIndex: 2,
                    transition: 'transform 0.3s ease, opacity 0.3s ease',
                    opacity: openMenu ? 1 : 0,
                    transform: openMenu ? 'translateY(0)' : 'translateY(-100%)',
                }}
            >
                {menuOptions.map((option) => (
                    <Button
                        key={option.label}
                        onClick={() => handleNavigate(option.path)}
                        sx={{
                            color: '#eae7dc',
                            textTransform: 'none',
                            '&:hover': { color: '#d8c3a5' },
                            my: 1,
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '14px',
                            justifyContent: 'flex-end',
                        }}
                    >
                        {option.label}
                    </Button>
                ))}
            </Box>
        </>
    );
};

export default Navbar;
