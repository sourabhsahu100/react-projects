import { Box, Button, CircularProgress, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch job details based on jobId
    const fetchJob = async () => {
      try {
        const response = await fetch(`http://localhost:5000/jobs/${jobId}`);
        if (!response.ok) {
          throw new Error('Job not found');
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container>
        <Box mt={4} textAlign="center">
          <Typography variant="h4" color="error">
            {error}
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      {job ? (
        <Box mt={4}>
          <Typography variant="h3" component="h1" gutterBottom>
            {job.title}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {job.company} - {job.location}
          </Typography>
          <Box my={2}>
            <img
              src={job.imageUrl}
              alt={job.title}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Box>
          <Typography variant="body1" paragraph>
            {job.description}
          </Typography>

          {/* Add Apply Button */}
          <Box mt={4}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href={`/apply/${jobId}`}
            >
              Apply Now
            </Button>
          </Box>
        </Box>
      ) : (
        <Typography variant="h5" align="center">Job details not available</Typography>
      )}
    </Container>
  );
};

export default JobDetail;
