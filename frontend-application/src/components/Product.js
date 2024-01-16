import React from 'react';

const Product = ({ category, products }) => {
  return (
    <div>
      <h3>{category}</h3>
      {products.map((product, index) => (
        <div key={index}>
          <img src={product.thumbnail} alt={product.title} />
          <h4>{product.title}</h4>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
