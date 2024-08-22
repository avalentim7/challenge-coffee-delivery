import React from "react";
import "./Home.scss";
import { Hero } from "../../components/Hero/Hero";
import { Products } from "../../components/Products/Products";

export function Home() {
  return (
    <div>
      <Hero />
      <Products />
    </div>
  );
}
