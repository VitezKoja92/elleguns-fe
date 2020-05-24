import React from "react";
import "./ProductCard.scss";
import { ProductSize } from "../../../enums/product-size.enum";

function ProductCard(props: ProductCardProps) {
  const getCalculatedPrice = (): string => {
    console.log("called");
    return props.salePercentage
      ? (props.price - (props.price * props.salePercentage) / 100).toFixed(2) +
          "€"
      : props.price + "€";
  };
  const imageUrl = require(`../../../photos/${props.imageName}.png`);

  const cardStyle = {
    background: `url(${imageUrl}) no-repeat center/cover`,
  };

  return (
    <div className="ProductCard">
      {props.salePercentage && (
        <div className="sale-percentage">{props.salePercentage + "% off"}</div>
      )}
      <div style={cardStyle} className="image"></div>
      <div className="card-description">
        <div className="features-wrapper"></div>
        <span className="name">{props.name}</span>
        <span className="new-price">{getCalculatedPrice()}</span>
        {props.salePercentage && (
          <span className="old-price">{props.price}€</span>
        )}
      </div>
    </div>
  );
}

export type ProductCardProps = {
  name: string;
  price: number;
  imageName?: string;
  salePercentage?: number;
  availableSizes?: ProductSize[];
};

export default ProductCard;
