// components/ProductList.js
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts, setCurrentProduct, toggleLike } from '../features/products/productsSlice';
import './styles/ProductsList.css';
import {  FaShoppingBag  } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = useSelector(selectProducts);
console.log(products)
  return (
    <div className="product-list">
      {products.map(product => (
        // <Link to={`/product/${product.id}`} key={product.id} className="product-link">
        <>
          {/* Link to the ProductDetails component with the product ID */}
          <ProductCard product={product} />
          </>
        // </Link>
      ))}
    </div>
  );
};

export default ProductList;
