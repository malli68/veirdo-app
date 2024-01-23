// Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaSearch,  FaHeart, FaUser, FaShoppingBag } from 'react-icons/fa';
import '../App.css';
import './styles/Header.css';
import { LOGO_IMAGE } from '../utils/constants';
import { useSelector } from 'react-redux';
import { selectLikeCount } from '../features/products/productsSlice';
import { selectCartCount } from '../features/cart/cartSlice';

const Header = () => {
    const likeCount = useSelector(selectLikeCount);
    const cartCount = useSelector(selectCartCount);
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };
    return (
        <header className="header">
            <div className="logo-container">
                <img src={LOGO_IMAGE} alt="Logo" />
            </div>
            <nav className="nav-container">
                <Link to="/">New Arrivals</Link>
                <Link to="/">Men</Link>
                <Link to="/">Winter Collection</Link>
                <Link to="/">Shop by Merch</Link>
                <Link to="/">UniSex</Link>
            </nav>
            <div className="search-container">
                <div className="search-bar">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Try searching t-shirts"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    {/* <FaSearch className="search-icon" /> */}
                </div>
                <div className="user-icons">
                    <div className="icon">
                        <FaUser className="user-icon" />
                    </div>
                    <div className="icon like-icon-container">
                        <FaHeart className="like-icon" />
                        {likeCount > 0 && <span className="like-count">{likeCount}</span>}
                    </div>
                    <Link to="/">
                        <div className="icon like-icon-container">
                            <FaShoppingBag className="like-icon" />
                            {cartCount > 0 && <span className="like-count">{cartCount}</span>}
                        </div>
                        {/* <div className="icon like-icon-container">
            <FaShoppingBag className="shopping-bag-icon" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div> */}
                    </Link>
                </div>
            </div>

        </header>
    );
};

export default Header;
