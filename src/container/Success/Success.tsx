import React from "react";
import "./Success.scss";
import Illustration from "../../assets/Illustration.png";
import { Clock, CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useCart } from "../../context/CartContext";

function Success() {
  const { deliveryAddress, selectedPaymentOption } = useCart();

  const paymentOptionText =
    selectedPaymentOption === "credit"
      ? "Cartão de Crédito"
      : selectedPaymentOption === "debit"
      ? "Cartão de Débito"
      : "Dinheiro";

  return (
    <div className="Success__container">
      <div className="Success__container--left">
        <h3 className="Success__title title-l">Uhu! Pedido confirmado</h3>
        <span className="Success__subtitle text-l-regular">
          Agora é só aguardar que logo o café chegará até você
        </span>

        <div className="Success__content">
          <div className="Success__info">
            <div className="Success__info--img_mappin">
              <MapPin weight="fill" color="#fff" size={32} />
            </div>
            <div>
              <h5 className="text-m-regular">
                Entrega em{" "}
                <b>
                  {deliveryAddress?.street}, {deliveryAddress?.streetNumber}
                </b>
              </h5>
              <span className="text-s">
                {deliveryAddress?.neighborhood} - {deliveryAddress?.city},{" "}
                {deliveryAddress?.uf}
              </span>
            </div>
          </div>

          <div className="Success__info">
            <div className="Success__info--img_timer">
              <Timer weight="fill" color="#fff" size={32} />
            </div>
            <div>
              <h5 className="text-m-regular">Previsão de entrega</h5>
              <span className="text-s">
                <b>{"20 min - 30 min"}</b>
              </span>
            </div>
          </div>

          <div className="Success__info">
            <div className="Success__info--img_currencydollar">
              <CurrencyDollar weight="fill" color="#fff" size={32} />
            </div>
            <div>
              <h5 className="text-m-regular">Pagamento na entrega</h5>
              <span className="text-s">
                <b>{paymentOptionText}</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="Success__container--right">
        <img src={Illustration} alt="" />
      </div>
    </div>
  );
}

export default Success;
