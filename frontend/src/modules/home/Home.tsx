import { Box } from '@chakra-ui/react';
import React from 'react';
import { Header } from '../header/Header';
import { Map } from '../map/Map';
import { OffersList } from '../offers/OffersList';

const Home = () => {
  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Header />
      <Box display="flex" flexDirection="row" flex={1} minHeight={0}>
        <Box flexBasis={600}>
          <OffersList />
        </Box>
        <Box flex={1}>
          <Map />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
