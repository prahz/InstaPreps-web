import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from 'components/molecules/product-card';

export const PRODUCT_CARD_ITEMS = [
  {
    id: 1,
    title: 'New Home Loan',
    description: 'Make your dream home a reality now with Home Loan interest rates starting as low as 6.75%.',
    icon: 'images/loan.png',
    href: '/signup'
  },
  {
    id: 2,
    title: 'Transfer Home Loan',
    description: 'Save by shifting your existing Home Loan at a better interest rates.',
    icon: 'images/transfer.png',
    href: '/signup'
  },
  {
    id: 3,
    title: 'Loan Against Property',
    description: 'Put your property to use by getting the most attractive interest rate.',
    icon: 'images/new.png',
    href: '/signup'
  }
];

export const ProductCards = ({ activeCardId }) => {
  const [activeCard, setActiveCard] = useState(activeCardId);
  return (
    <ul className='mr-4 space-y-5'>
      {PRODUCT_CARD_ITEMS.map((item) => (
        <ProductCard
          key={String(item.id)}
          {...item}
          isActive={activeCard === item.id}
          onMouseOver={setActiveCard}
          onMouseLeave={setActiveCard}
        />
      ))}
    </ul>
  );
};

ProductCards.propTypes = {
  activeCardId: PropTypes.number.isRequired
};

ProductCards.defaultProps = {};
