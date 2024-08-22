import React from "react";
import "./ProductCard.scss";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import InputQuantity from "../../InputQuantity/InputQuantity";

type ProductCardProps = {
  name: string;
  description: string;
  price: string;
  categories: string[];
  img: string;
};

export function ProductCard({
  name,
  description,
  price,
  categories,
  img,
}: ProductCardProps) {
  return (
    <div className="ProductCard">
      <div className="ProductCard__img">
        <img src={img} alt="" />
      </div>
      <div className="ProductCard__category">
        {categories.map((category: string) => (
          <span className="tag">{category}</span>
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
          <InputQuantity onAddItem={() => {}} onSubItem={() => {}} value={1} />
          <div className="ProductCard__footer__buttons--cart">
            <button onClick={() => {}}>
              <ShoppingCartSimple size={22} weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
