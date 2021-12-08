import React from 'react';
import { OfferInterface } from './OfferInterface';

const Offer = ({ title }: OfferInterface) => {
  return (
    <div className="offer">
      <div className="offer__inner">
        <h2 className="offer__title">{title}</h2>
      </div>
    </div>
  );
};

export default Offer;
