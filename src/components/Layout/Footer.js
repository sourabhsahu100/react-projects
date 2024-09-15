import { Box, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => (
  <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0' }}>
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {/* Company Information */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" component="div" gutterBottom>
            JobConnect
          </Typography>
          <Typography variant="body1">
            Your platform for finding the best job opportunities and connecting with top employers.
          </Typography>
        </Grid>
        
        {/* Navigation Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" component="div" gutterBottom>
            Quick Links
          </Typography>
          <Box>
            <Link component={RouterLink} to="/search" color="inherit" style={{ display: 'block', marginBottom: '8px' }}>
              Job Search
            </Link>
            <Link component={RouterLink} to="/post" color="inherit" style={{ display: 'block', marginBottom: '8px' }}>
              Post a Job
            </Link>
            <Link component={RouterLink} to="/about" color="inherit" style={{ display: 'block', marginBottom: '8px' }}>
              About Us
            </Link>
            <Link component={RouterLink} to="/contact" color="inherit" style={{ display: 'block' }}>
              Contact Us
            </Link>
          </Box>
        </Grid>
        
        {/* Contact Information */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" component="div" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">
            Email: <a href="mailto:support@jobconnect.com" style={{ color: '#fff' }}>support@jobconnect.com</a>
          </Typography>
          <Typography variant="body2">
            Phone: +1 (123) 456-7890
          </Typography>
          <Typography variant="body2">
            Address: 123 Job Street, New York, NY 10001
          </Typography>
        </Grid>
      </Grid>

      <Box mt={3} textAlign="center">
        <Typography variant="body2">
          &copy; 2024 JobConnect. All rights reserved.
        </Typography>
      </Box>
    </Container>
  </footer>
);

export default Footer;
