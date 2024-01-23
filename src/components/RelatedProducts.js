
// import React, {useState} from 'react';
// import ProductCard from './ProductCard'; // Adjust the path
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import './styles/RelatedProducts.css'
// const RelatedProducts = ({ products }) => {
//     const [startIndex, setStartIndex] = useState(0);
//   const itemsPerPage = 4;

//   const handlePrev = () => {
//     setStartIndex((prevIndex) => (prevIndex - itemsPerPage >= 0 ? prevIndex - itemsPerPage : 0));
//   };

//   const handleNext = () => {
//     setStartIndex((prevIndex) =>
//       prevIndex + itemsPerPage < products.length ? prevIndex + itemsPerPage : prevIndex
//     );
//   };

//   const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

//   return (
//     <div className="related-products-container">
//       <h2>Related Products</h2>
//       <div className="product-slider">
//       <button className="nav-icon" onClick={handlePrev} disabled={startIndex === 0}>
//   <FaChevronLeft />
// </button>
//         <div className="product-cards">
//           {visibleProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//         <button
//   className="nav-icon"
//   onClick={handleNext}
//   disabled={startIndex + itemsPerPage >= products.length}
// >
//   <FaChevronRight />
// </button>
//       </div>
//     </div>
//   );
// };

// export default RelatedProducts;
// RelatedProducts.js
// RelatedProducts.js

// RelatedProducts.js

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './styles/RelatedProducts.css';

const RelatedProducts = ({ products }) => {
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalRows = Math.ceil(products.length / itemsPerPage);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
  
    const visibleProducts = products.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    return (
      <div className="related-products-container">
        <h2>Related Products</h2>
        <div className="product-cards">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {totalRows > 1 && (
          <div className="dots-container">
            {[...Array(totalRows)].map((_, index) => (
              <div
                key={index}
                className={`dot ${index + 1 === currentPage ? 'active' : ''}`}
                onClick={() => handlePageChange(index + 1)}
              ></div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default RelatedProducts;


