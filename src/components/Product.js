import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, img, price, rating }) => {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "Add_To_Basket",
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="prodcuct__info">
        <p>{title}</p>
        <p className="product__price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={img} alt="" />
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
};

export default Product;
