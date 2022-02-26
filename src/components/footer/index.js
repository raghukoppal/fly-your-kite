import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      {new Date().getFullYear()}{' '}
      <Link color="inherit" href="#">
        Fly Your Kite
      </Link>{' '}
    </Typography>
  );
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="lg">
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
