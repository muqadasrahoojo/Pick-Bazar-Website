import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import heroSectionImg from '../../assets/Imgs/Hero-Img.webp';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${heroSectionImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'black',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '27px', color: '#1f2937' }}>
          Groceries Delivered in 90 Minute
        </Typography>
        <Typography variant="p" sx={{ marginBottom: '25px' }}>
          Get your healthy foods & snacks delivered at your doorsteps all day every day
        </Typography>

        {/* <Box className='d-flex justify-content-between'>
        <Paper
        size="large"
          component="form"
          sx={{
            
            display: 'flex',
            alignItems: 'center',
            width: 'auto',
            boxShadow: 'none',
            backgroundColor: '#ffffff',

            '&:focus-within': {
              border: '1px solid #019376',
            },
           
          }}
        >
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              fontSize: '14px',
              outlineColor: '#019376',

            }}
            placeholder="Search your products from here"
            inputProps={{ 'aria-label': 'search products' }}
          />

        </Paper>
        <Button sx={{ backgroundColor: '#019376' }}>
          <SearchIcon sx={{ color: '#fff' }} />
          <Typography sx={{ color: '#fff', p: '10px' }} variant='button'>Search</Typography>
        </Button>
        </Box> */}
      </Box>

      <Box className='mt-5 d-flex justify-content-center'>
        <Paper
          component="form"
          sx={{

            display: 'flex',
            alignItems: 'center',
            width: '650px',
            borderRadius: '5px',
            boxShadow: 'none',
            padding: '2px 10px',
            backgroundColor: '#ffffff',
            '&:focus-within': {
              border: '1px solid #019376',
            },


          }}
        >
          <InputBase
            sx={{
              flex: 1,
              fontSize: '14px',
              color: '#000',
            }}
            placeholder="Search your products from here"
            inputProps={{ 'aria-label': 'search products' }}
          />
        </Paper>
        <Button
          variant="contained"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            backgroundColor: '#019376',
            '&:hover': {
              backgroundColor: '#017a5b',
            },
          }}
        >
          <SearchIcon sx={{ color: '#fff' }} />
          <Typography sx={{ color: '#fff', fontWeight: 'bold', p: '10px' }} variant="button">
            Search
          </Typography>
        </Button>
      </Box>

    </Box>
  );
};




export default HeroSection;




