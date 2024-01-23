// ProductDetails.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TOM_IMAGE } from '../utils/constants';
import { FaHeart, FaStar } from 'react-icons/fa';
import { addToCart, selectCartItems, updateQuantity } from '../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import RelatedProducts from './RelatedProducts';
import { addToLiked, removeFromLiked, selectLikeCount, selectLikedProducts, selectProducts } from '../features/products/productsSlice';
import './styles/ProductDetails.css'
const ProductDetails = () => {
    // Assuming you're using React Router and passing the product ID via route params
    //   const productId = match.params.productId;
    const { productId } = useParams();
    const productss = useSelector(selectProducts);

    console.log(productss, "poooo")
    //   // Mock product details data
    const product = {
        id: productId,
        title: "Brandy Bliss: Chic Brown Sun Men's Pullover",
        description: 'This is a sample product description.',
        image: TOM_IMAGE,
        currentPrice: 19.99,
        originalPrice: 29.99,
        description: 'Product Description',
        currentPrice: 50,
        originalPrice: 75,
        rating: 4.5,
        sizeChart: ["S", "M", "L", "XL", "XXL", "XXXl"]
        // Add other details as needed
    };

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const productsList = useSelector(selectProducts);
    const likedProducts = useSelector(selectLikedProducts);
    const likeCount = useSelector(selectLikeCount);
    const [liked, setLiked] = useState(likedProducts.includes(product.id));
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        // setQuantity((prev)=> prev + 1)
        dispatch(addToCart({ product, quantity }));
      };
    
      const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity)
        dispatch(updateQuantity({ productId: product.id, quantity: newQuantity }));
      };

      const handleAddToWishlist = () => {
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
    console.log(product, "ggg")
    return (
        //     <div className="product-details-container">
        //     <div className="product-info">
        //       <h2 className="product-title">{product.title}</h2>
        //       <div className="product-prices">
        //         <span className="current-price">${product.currentPrice}</span>
        //         {product.actualPrice && (
        //           <span className="actual-price">${product.actualPrice}</span>
        //         )}
        //       </div>
        //       <div className="size-chart">
        //         {/* Add your size chart content and buttons here */}
        //         <p>Size Chart</p>
        //         <button>Button 1</button>
        //         <button>Button 2</button>
        //       </div>
        //       <div className="quantity-section">
        //         <label htmlFor="quantity">Quantity:</label>
        //         <input
        //           type="number"
        //           id="quantity"
        //           name="quantity"
        //           value={quantity}
        //           onChange={handleQuantityChange}
        //         />
        //       </div>
        //       <button className="add-to-cart-button" onClick={handleAddToCart}>
        //         Add to Cart
        //       </button>
        //     </div>
        //     <div className="product-image-container">
        //       <img src={product.image} alt={product.title} className="product-image" />
        //     </div>
        //     <RelatedProducts products={productsList} />
        //   </div>
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
                {/* Add Today's Offers Card */}
                <div className="todays-offers-card">
                    <h2>Today's Special Offers</h2>
                    <p>Avail Free Shipping on Prepaid Orders</p>
                    <p>Get Rs. 100 Off With Coupon - GIFT100 On Orders above Rs. 500</p>
                    <p>Get 10% Off With Coupon - VEIRDO10 On Orders above Rs. 500</p>
                </div>
                {/* Add Size Chart */}
                <div className="size-chart">
                    <h2>Size Chart</h2>
                    <div className="size-buttons">
                        {product.sizeChart.map((size, index) => (
                            <button key={index}>{size}</button>
                        ))}
                    </div>
                </div>
                <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(quantity - 1)} disabled={quantity === 1}>
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
          <span>Add to Wishlist</span>
        </button>
        {/* <button onClick={handleAddToWishlist}>Add to Wishlist</button> */}
      </div>
            </div>
            <div className="related-products">
                <RelatedProducts products={productsList} />
            </div>
        </div>
    );
};

export default ProductDetails;
