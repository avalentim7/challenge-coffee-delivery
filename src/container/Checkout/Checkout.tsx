import React from "react";
import "./Checkout.scss";
import InputText from "../../components/InputText/InputText";
import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import CheckoutTitle from "../../components/CheckoutTitle/CheckoutTitle";

export function Checkout() {
  return (
    <div className="Checkout__container">
      <div className="Checkout__container--left">
        <h3 className="Checkout__order__subtitle title-xs">
          Complete seu pedido
        </h3>
        <div className="Checkout__order__container">
          <CheckoutTitle
            title="Endereço de Entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
            icon={<MapPinLine size="22" color="var(--color-yellow-dark)" />}
          />
          <div className="Checkout__order__container__options">
            <div className="Checkout__order__container__options--group">
              <InputText placeholder="CEP" size="200px" />
            </div>
            <div className="Checkout__order__container__options--group">
              <InputText placeholder="Rua" />
            </div>
            <div className="Checkout__order__container__options--group">
              <InputText placeholder="Número" size="200px" />
              <InputText placeholder="Complemento" isOptional />
            </div>

            <div className="Checkout__order__container__options--group">
              <InputText placeholder="Bairro" size="200px" />
              <InputText placeholder="Cidade" />
              <InputText placeholder="UF" size="60px" />
            </div>
          </div>
        </div>

        <div className="Checkout__order__container">
          <CheckoutTitle
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={<CurrencyDollar size="22" color="var(--color-purple)" />}
          />
        </div>
      </div>
      <div className="Checkout__container--right">
        <h3 className="Checkout__order__subtitle title-xs">
          Cafés selecionados
        </h3>
        <div className="Checkout__order__container"></div>
      </div>
    </div>
  );
}
