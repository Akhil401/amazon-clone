import React from "react";
import "./checkoutproduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, title, img, price, rating }) => {
  const [{},dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "Remove_From_Basket",
      id: id,
    });
  };

  return (
    <div className="checkoutproduct">
      <img src={img} alt="" />
      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">{title}</p>
        <p className="checkoutproduct__price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
