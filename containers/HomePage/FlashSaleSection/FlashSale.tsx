import React from 'react';
import { Box, Container, Typography, IconButton, Stack, styled } from '@mui/material';
import Image from 'next/image'; // Import the Image component
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

interface FlashSaleProps {
  // Define any specific props here (e.g., if you expect certain props to be passed in)
}

const SectionDivider = styled('div')({
  marginTop: '58px',
  marginBottom: '58px',
  marginLeft: '-12px',
  borderColor: '#E8E8E8',
  borderWidth: '1px',
  width: '100%',
});

const FlashSale = (props: FlashSaleProps) => {
  const products = [
    { id: 1, name: 'Product 1', image: '/path/to/image1.jpg' },
    { id: 2, name: 'Product 2', image: '/path/to/image2.jpg' },
    // Add more product data
  ];

  const handleSlide = (direction: 'left' | 'right') => {
    // Handle the sliding logic
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <Box sx={{ width: 20, height: 40, bgcolor: '#DB4444', borderRadius: 1 }} />
        <Typography variant="subtitle1" color="#DB4444" fontWeight="600">
          Flash Sale
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" color="black" fontWeight="600">
          Flash Sale Products
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton
            onClick={() => handleSlide('left')}
            sx={{
              bgcolor: '#F5F5F5',
              '&:hover': { bgcolor: '#E5E5E5' },
            }}
          >
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            onClick={() => handleSlide('right')}
            sx={{
              bgcolor: '#F5F5F5',
              '&:hover': { bgcolor: '#E5E5E5' },
            }}
          >
            <KeyboardArrowRight />
          </IconButton>
        </Stack>
      </Stack>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
        {products.map((product) => (
          <Box key={product.id} sx={{ position: 'relative' }}>
            {/* Use next/image for optimized images */}
            <Image
              src={product.image}
              alt={product.name}
              width={170}
              height={170}
              style={{ objectFit: 'contain' }}
            />
            <Typography variant="subtitle1">{product.name}</Typography>
          </Box>
        ))}
      </Box>
      <SectionDivider />
    </Container>
  );
};

export default FlashSale;
