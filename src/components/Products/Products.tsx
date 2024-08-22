import React from "react";
import "./Products.scss";
import { ProductCard } from "./ProductCard/ProductCard";
import { ProductsList } from "./ProductsList";

export function Products() {
  return (
    <div className="Products">
      <h2 className="title-l">Nossos cafés</h2>
      <div className="Products__cards">
        {ProductsList.map((item) => (
          <ProductCard {...item} />
        ))}
      </div>
    </div>
  );
}
