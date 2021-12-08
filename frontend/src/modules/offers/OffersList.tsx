import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Offer from './Offer';
import { OfferInterface } from './OfferInterface';

interface ListInterface extends Array<OfferInterface> {}

export const OffersList = ({ filter }) => {
  const [offers, setOffers] = useState<ListInterface>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const url = `http://localhost:3001/offers?title=${filter}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(url);
        setOffers(res.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        console.error(err);
      }
    };
    fetchData();
  }, [url, filter]);

  console.log(offers);

  return (
    <Flex
      alignItems="flex-start"
      justifyContent="center"
      backgroundColor="#212121"
      height="100%"
    >
      <Box width="100%" paddingX={10} height="100%" overflowY="auto">
        {loading
          ? 'Loading...'
          : offers.map(offer => (
              <Offer
                key={offer.id}
                id={offer.id}
                title={offer.title}
                publishedAt={offer.publishedAt}
                latitude={offer.latitude}
                longitude={offer.longitude}
              />
            ))}
      </Box>
    </Flex>
  );
};
