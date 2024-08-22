import React from "react";
import "./Hero.scss";
import HeroBanner from "../../assets/HeroBanner.svg";

import { Package, ShoppingCart } from "@phosphor-icons/react";

export function Hero() {
  return (
    <div className="Hero">
      <div className="Hero__side-left">
        <div className="Hero__side-left__title-group">
          <h1 className="Hero__side-left__title title-xl">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <span className="Hero__side-left__subtitle text-l-regular">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </div>
        <div className="Hero__side-left__card-group">
          <div className="Hero__side-left__card-item--small">
            <div className="Hero__side-left__card-item-img--yellow-dark">
              <ShoppingCart size={16} weight="fill" />
            </div>
            <span className="Hero__side-left__card-item-text text-m-regular">
              Compra simples e segura
            </span>
          </div>

          <div className="Hero__side-left__card-item--medium">
            <div className="Hero__side-left__card-item-img--gray-dark">
              <Package size={16} weight="fill" />
            </div>
            <span className="Hero__side-left__card-item-text text-m-regular">
              Embalagem mantém o café intacto
            </span>
          </div>

          <div className="Hero__side-left__card-item--small">
            <div className="Hero__side-left__card-item-img--yellow">
              <ShoppingCart />
            </div>
            <span className="Hero__side-left__card-item-text text-m-regular">
              Entrega rápida e rastreada
            </span>
          </div>

          <div className="Hero__side-left__card-item--medium">
            <div className="Hero__side-left__card-item-img--purple">
              <ShoppingCart />
            </div>
            <span className="Hero__side-left__card-item-text text-m-regular">
              O café chega fresquinho até você
            </span>
          </div>
        </div>
      </div>
      <div className="Hero__side-right">
        <img src={HeroBanner} alt="" />
      </div>
    </div>
  );
}
