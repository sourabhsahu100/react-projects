import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Sourabh Sahu',
    email: 'sahu.sourabh@gmail.com',
    bio: '',
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [message, setMessage] = useState('');

  // Handle profile form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  // Handle image upload and preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // Simulate API call to save profile data
  const saveProfile = () => {
    // Simulate saving to db.json by displaying a success message
    setMessage('Profile changes have been saved successfully.');
    console.log('Profile data saved:', profile);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    saveProfile();
  };

  return (
    <Container 
      maxWidth="sm" 
      style={{ 
        marginTop: '50px', 
        marginBottom: '100px' // Add sufficient bottom margin to prevent overlap with the footer
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Manage Your Profile
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
          <Avatar
            alt="Profile Picture"
            src={selectedImage || '/default-avatar.png'}
            sx={{ width: 150, height: 150 }}
          />
          <Button
            variant="outlined"
            component="label"
            sx={{ mt: 2 }}
          >
            Upload Profile Picture
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageUpload}
            />
          </Button>
        </Box>

        <TextField
          label="Name"
          name="name"
          value={profile.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={profile.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Bio"
          name="bio"
          value={profile.bio}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          multiline
          rows={2}
        />

        <Box mt={2} display="flex" justifyContent="center">
          <Button variant="contained" color="primary" type="submit">
            Save Changes
          </Button>
        </Box>
      </form>

      {/* Show success message if profile is saved */}
      {message && (
        <Typography color="success" sx={{ mt: 2, textAlign: 'center' }}>
          {message}
        </Typography>
      )}
    </Container>
  );
};

export default Profile;
