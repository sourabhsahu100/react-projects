import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const JobPost = () => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    company: '',
    location: '',
    imageUrl: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({
      ...jobDetails,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!jobDetails.title) newErrors.title = 'Job title is required';
    if (!jobDetails.description) newErrors.description = 'Job description is required';
    if (!jobDetails.company) newErrors.company = 'Company name is required';
    if (!jobDetails.location) newErrors.location = 'Location is required';
    if (!jobDetails.imageUrl) newErrors.imageUrl = 'Image URL is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Post the job details to the server (db.json)
    fetch('http://localhost:5000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Job posted successfully:', data);
        setJobDetails({
          title: '',
          description: '',
          company: '',
          location: '',
          imageUrl: '',
        });
        setErrors({});
      })
      .catch((error) => console.error('Error posting job:', error));
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '80px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Post a Job
      </Typography>

      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {/* Job Title */}
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="title"
              label="Job Title"
              name="title"
              value={jobDetails.title}
              onChange={handleChange}
              error={!!errors.title}
              helperText={errors.title}
            />
          </Grid>

          {/* Job Description */}
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              multiline
              minRows={3}
              id="description"
              label="Job Description"
              name="description"
              value={jobDetails.description}
              onChange={handleChange}
              error={!!errors.description}
              helperText={errors.description}
            />
          </Grid>

          {/* Company Name */}
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="company"
              label="Company Name"
              name="company"
              value={jobDetails.company}
              onChange={handleChange}
              error={!!errors.company}
              helperText={errors.company}
            />
          </Grid>

          {/* Location */}
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="location"
              label="Location"
              name="location"
              value={jobDetails.location}
              onChange={handleChange}
              error={!!errors.location}
              helperText={errors.location}
            />
          </Grid>

          {/* Image URL */}
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="imageUrl"
              label="Image URL"
              name="imageUrl"
              value={jobDetails.imageUrl}
              onChange={handleChange}
              error={!!errors.imageUrl}
              helperText={errors.imageUrl}
            />
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Box mt={3}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Post Job
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default JobPost;
