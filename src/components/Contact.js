import React, { useState } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, 'formData');
  };

  return (
    <div>
      <Typography variant='h3' sx={{ margin: '1rem' }}>
        Contact
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{ marginBottom: '1rem' }}>
            <TextField
              type='text'
              name='name'
              label="Name"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            />
          </Box>
          <Box sx={{ marginBottom: '1rem' }}>
            <TextField
              type='text'
              name='message'
              label="Message"
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              variant='outlined'
            />
          </Box>
          <Button variant='outlined' type='submit'>
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
}
