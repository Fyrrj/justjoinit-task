import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { HeaderInterface } from './HeaderInterface';

export const Header = ({ filter, setFilter }: HeaderInterface) => {
  return (
    <Flex
      height={100}
      alignItems="center"
      justifyContent="flex-start"
      backgroundColor="#2C2C2C"
      color="#ccc"
      mb={1}
    >
      <Box
        width="100%"
        fontSize={34}
        paddingLeft={40}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <span className="logotype">justjoin.it</span>
        <small> #1 Job Board for IT industry in Poland</small>
        <input
          className="filter"
          type="text"
          placeholder="szukaj..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </Box>
    </Flex>
  );
};
