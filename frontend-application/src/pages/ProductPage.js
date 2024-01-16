import React, { useState, useEffect } from 'react';
import { getProducts } from '../api';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product Page</h2>
      {products.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3>
          {category.products.map((product, idx) => (
            <div key={idx}>
              <img src={product.thumbnail} alt={product.title} />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
