import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        position: 'relative',
        marginTop: 'auto',
        backgroundColor: '#6e6658',
        color: '#eae7dc',
        textAlign: 'center',
        padding: '0.1rem 0',
        width: '100%',
        bottom: 0,
        fontFamily: 'Poppins, sans-serif',
        zIndex: 1,
        margin: '0',
      }}
    >
      <p>&copy; {new Date().getFullYear()} Evangelos Argyropoulos. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
