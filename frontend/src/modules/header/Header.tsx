import { Box } from '@chakra-ui/react';
import React from 'react';

export const Header = () => {
  return (
    <Box
      height={100}
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#dedede"
    >
      <Box fontSize={24}>Header</Box>
    </Box>
  );
};
