import React, { useState } from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import './styles/ProductCard.css'; // Import your CSS file for ProductCard styles
import { Link } from 'react-router-dom';
import { addToLiked, removeFromLiked, selectLikedProducts } from '../features/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const likedProducts = useSelector(selectLikedProducts);
    const [liked, setLiked] = useState(likedProducts.includes(product.id));
  
    const handleLikeClick = () => {
      // Check if the product is already liked
      const alreadyLiked = likedProducts.includes(product.id);
  
      // Toggle the liked state
      setLiked(!alreadyLiked);
  
      // Dispatch an action to add or remove from liked list
      if (alreadyLiked) {
        dispatch(removeFromLiked(product.id));
      } else {
        dispatch(addToLiked(product.id));
      }
    };
  
    return (
      <div className="product-card">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.title} className="product-image" />
        </Link>
        <div className="product-details">
        <div className="title">{product.title}</div>
        <div className="price">
          <span className="current-price">${product.offerPrice}</span>
          {product.actualPrice && (
            <span className="actual-price">${product.actualPrice}</span>
          )}
          {product.offer && (
            <span className="offer">{product.discount}</span>
          )}
        </div>
        <div className="rating">
          {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
            <FaStar key={index} className="star" />
          ))}
        </div>
          <button className="like-button" onClick={handleLikeClick}>
          {liked ? (
            <FaHeart className="like-icon liked" />
          ) : (
            <FaHeart className="like-icon" />
          )}
        </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
