import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Header } from '../header/Header';
import { Map } from '../map/Map';
import { OffersList } from '../offers/OffersList';

const Home = () => {
  const [filter, setFilter] = useState('');

  return (
    <Flex height="100%" flexDirection="column">
      <Header filter={filter} setFilter={setFilter} />
      <Flex flexDirection="row" flex={1} minHeight={0}>
        <Box flexBasis={600}>
          <OffersList filter={filter} />
        </Box>
        <Box flex={1}>
          <Map />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
