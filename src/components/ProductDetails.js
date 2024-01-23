// ProductDetails.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { TOM_IMAGE } from "../utils/constants";
import { FaHeart, FaStar } from "react-icons/fa";
import {
  addToCart,
  selectCartItems,
  updateQuantity,
} from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import RelatedProducts from "./RelatedProducts";
import {
  addToLiked,
  removeFromLiked,
  selectLikeCount,
  selectLikedProducts,
  selectProducts,
} from "../features/products/productsSlice";
import "./styles/ProductDetails.css";
const ProductDetails = () => {
  const { productId } = useParams();
  const productss = useSelector(selectProducts);

  const product = {
    id: productId,
    title: "Brandy Bliss: Chic Brown Sun Men's Pullover",
    description: "This is a sample product description.",
    image: TOM_IMAGE,
    currentPrice: 19.99,
    originalPrice: 29.99,
    description: "Product Description",
    currentPrice: 50,
    originalPrice: 75,
    rating: 4.5,
    sizeChart: ["S", "M", "L", "XL", "XXL", "XXXl"],
  };

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const productsList = useSelector(selectProducts);
  const likedProducts = useSelector(selectLikedProducts);
  const likeCount = useSelector(selectLikeCount);
  const [liked, setLiked] = useState(likedProducts.includes(product.id));
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    dispatch(updateQuantity({ productId: product.id, quantity: newQuantity }));
  };

  const handleAddToWishlist = () => {
    const alreadyLiked = likedProducts.includes(product.id);
    setLiked(!alreadyLiked);
    if (alreadyLiked) {
      dispatch(removeFromLiked(product.id));
    } else {
      dispatch(addToLiked(product.id));
    }
  };
  console.log(product, "ggg");
  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h1>"{product.title}"</h1>
        <div className="price-container">
          <p className="current-price">Rs.{product.currentPrice}.00</p>
          <p className="actual-price">Rs.{product.originalPrice}.00</p>
        </div>

        <div className="special-offers-container">
          <h3>Today's Special Offers</h3>
          <p>Avail Free Shipping on Prepaid Orders</p>
          <p>Get Rs. 100 Off With Coupon - GIFT100 On Orders above Rs. 500</p>
          <p>Get 10% Off With Coupon - VEIRDO10 On Orders above Rs. 500</p>
        </div>

        <div className="size-chart">
          <h2>Size Chart</h2>
          <div className="size-buttons">
            {product.sizeChart.map((size, index) => (
              <button key={index}>{size}</button>
            ))}
          </div>
        </div>
        <div className="quantity-controls">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity === 1}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
        </div>
        <div className="action-buttons">
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={handleAddToWishlist}>
            {liked ? (
              <FaHeart className="like-icon liked" />
            ) : (
              <FaHeart className="like-icon" />
            )}
            <>Add to Wishlist</>
          </button>

        </div>
      </div>
      <div className="related-products">
        <RelatedProducts products={productsList} />
      </div>
    </div>
  );
};

export default ProductDetails;
