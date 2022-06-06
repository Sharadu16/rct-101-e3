import React from "react";

const Product = () => {
  //  const {item}  = useContext(CartContext);
  // Note: this id should come from api
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add To Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">Increment</button>
        <span data-cy="product-count">
          {
            
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">Decrement</button>
        <button data-cy="product-remove-cart-item-button">Remove Item</button>
      </div>
    </div>
  );
};

export default Product;
