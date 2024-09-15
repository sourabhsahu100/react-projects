import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch job data from db.json
    fetch('http://localhost:5000/jobs')
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error('Error fetching job data:', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container maxWidth="lg" style={{ textAlign: 'center', marginTop: '80px' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to JobConnect
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Your platform for finding the best job opportunities and connecting with top employers.
      </Typography>

      <Box mt={4}>
        <Button
          component={Link}
          to="/search"
          variant="contained"
          color="primary"
          size="large"
        >
          Start Searching for Jobs
        </Button>
      </Box>

      <Box mt={2}>
        <Button
          component={Link}
          to="/post"
          variant="outlined"
          color="secondary"
          size="large"
        >
          Post a Job
        </Button>
      </Box>

      <Box mt={5}>
        <Typography variant="h4" component="h2" gutterBottom>
          Available Jobs
        </Typography>

        <Slider {...settings} style={{ marginTop: '20px' }}>
          {jobs.map((job) => (
            <Card
              key={job.id}
              sx={{ maxWidth: 345, m: 2, display: 'flex', flexDirection: 'column', height: '100%' }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <CardMedia
                component="img"
                alt={job.title}
                height="200"  // Adjusted for better image height
                image={job.imageUrl}
                style={{
                  objectFit: 'cover',
                  borderRadius: '4px',
                }}  // Ensures the image fits properly inside the card
              />
              <CardContent style={{ flex: '1 0 auto' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {job.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {job.company} - {job.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {job.description}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: 'center', marginTop: 'auto' }}>
                <Button size="small" component={Link} to={`/jobs/${job.id}`}>
                  View Details
                </Button>
              </CardActions>
            </Card>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default Home;
