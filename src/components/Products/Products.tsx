import React from "react";
import "./Products.scss";
import { ProductCard } from "./ProductCard/ProductCard";
import { ProductsList } from "./ProductsList";
import { useCart } from "../../context/CartContext";

export function Products() {
  const { quantities, addItem, subItem } = useCart();

  return (
    <div className="Products">
      <h2 className="title-l">Nossos cafés</h2>
      <div className="Products__cards">
        {ProductsList.map((item) => (
          <ProductCard
            {...item}
            key={item.name}
            onAddItem={() => addItem(item.id)}
            onSubItem={() => subItem(item.id)}
            quantity={quantities[item.id] || 0}
          />
        ))}
      </div>
    </div>
  );
}
