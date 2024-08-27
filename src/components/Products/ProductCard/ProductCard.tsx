import React from "react";
import "./ProductCard.scss";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import InputQuantity from "../../InputQuantity/InputQuantity";
import { Link } from "react-router-dom";

type ProductCardProps = {
  name: string;
  description: string;
  price: string;
  categories: string[];
  img: string;
  quantity: number;
  onAddItem: () => void;
  onSubItem: () => void;
};

export function ProductCard({
  name,
  description,
  price,
  categories,
  img,
  quantity,
  onAddItem,
  onSubItem,
}: ProductCardProps) {
  return (
    <div className="ProductCard">
      <div className="ProductCard__img">
        <img src={img} alt="" />
      </div>
      <div className="ProductCard__category">
        {categories.map((category: string) => (
          <span className="tag" key={category}>{category}</span>
        ))}
      </div>
      <div className="ProductCard__subtitle">
        <h4 className="title-s">{name}</h4>
      </div>
      <div className="ProductCard__label">
        <span className="text-s">{description}</span>
      </div>
      <div className="ProductCard__footer">
        <div className="ProductCard__footer--price">
          <span className="text-s">R$</span>
          <h4 className="title-m">{price}</h4>
        </div>
        <div className="ProductCard__footer__buttons">
          <InputQuantity onAddItem={onAddItem} onSubItem={onSubItem} value={quantity} />
          <div className="ProductCard__footer__buttons--cart">
            <Link to="/checkout">
              <ShoppingCartSimple size={22} weight="fill" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
