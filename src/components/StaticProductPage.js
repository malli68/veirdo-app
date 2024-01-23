import React from 'react';
import ProductDetails from './ProductDetails';
import { TOM_IMAGE } from '../utils/constants';

const StaticProductPage = () => {
  // Sample static product data
  const Product = {
    id: 1,
    title: 'This is a sample product description.',
    description: 'This is a sample product description.',
    image: TOM_IMAGE,
    currentPrice: 19.99,
    originalPrice: 29.99,
    rating: 4.5,
    category: 'Sample Category',
  };

  return (
    <div>
      <h2>Product Details Page</h2>
      <ProductDetails Product={Product} />
    </div>
  );
};

export default StaticProductPage;