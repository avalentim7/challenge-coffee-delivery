import React, { useMemo } from "react";
import "./Checkout.scss";
import {
  ProductsList,
  ProductsListProps,
} from "../../components/Products/ProductsList";
import InputText from "../../components/InputText/InputText";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "@phosphor-icons/react";
import CheckoutTitle from "../../components/CheckoutTitle/CheckoutTitle";
import { useCart } from "../../context/CartContext";
import InputQuantity from "../../components/InputQuantity/InputQuantity";
import { Link } from "react-router-dom";

export function Checkout() {
  const {
    quantities,
    addItem,
    subItem,
    removeItem,
    onChangeSelectedPaymentOption,
    selectedPaymentOption,
    deliveryAddress,
    onChangeDeliveryAddress,
  } = useCart();

  const chartProducts = useMemo(
    () => ProductsList.filter((product) => quantities[product.id]),
    [quantities]
  );

  const totalItemsPrice = chartProducts.reduce(
    (accum: number, currentValue: ProductsListProps) => {
      const totalItems = quantities[currentValue.id];

      return (accum +=
        Number(currentValue.price.replace(",", ".")) * totalItems);
    },
    0
  );

  const totalDeliveryPrice = totalItemsPrice > 0 ? 3.5 : 0;
  const totalPrice =
    totalItemsPrice > 0 ? totalItemsPrice + totalDeliveryPrice : 0;

  if (totalPrice === 0)
    return (
      <div className="Checkout__container">
        <div className="Checkout__container--left">
          <div className="Checkout__notfound__container">
            <h3 className="Checkout__notfound__subtitle text-l-bold">
              Nenhum pedido selecionado.
            </h3>
            <span className="Checkout__notfound__subtitle text-m-regular">
              <Link to="/">Clique aqui</Link> para voltar ao início e selecionar
              o seu café.
            </span>
          </div>
        </div>
      </div>
    );

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
              <InputText
                placeholder="CEP"
                inputSize="200px"
                value={deliveryAddress?.cep}
                onChange={(e) => {
                  onChangeDeliveryAddress("cep", e.target.value);
                }}
              />
            </div>
            <div className="Checkout__order__container__options--group">
              <InputText
                placeholder="Rua"
                value={deliveryAddress?.street}
                onChange={(e) => {
                  onChangeDeliveryAddress("street", e.target.value);
                }}
              />
            </div>
            <div className="Checkout__order__container__options--group">
              <InputText
                placeholder="Número"
                inputSize="200px"
                value={deliveryAddress?.streetNumber}
                onChange={(e) => {
                  onChangeDeliveryAddress("streetNumber", e.target.value);
                }}
              />
              <InputText
                placeholder="Complemento"
                isOptional
                value={deliveryAddress?.complement}
                onChange={(e) => {
                  onChangeDeliveryAddress("complement", e.target.value);
                }}
              />
            </div>

            <div className="Checkout__order__container__options--group">
              <InputText
                placeholder="Bairro"
                inputSize="200px"
                value={deliveryAddress?.neighborhood}
                onChange={(e) => {
                  onChangeDeliveryAddress("neighborhood", e.target.value);
                }}
              />
              <InputText
                placeholder="Cidade"
                value={deliveryAddress?.city}
                onChange={(e) => {
                  onChangeDeliveryAddress("city", e.target.value);
                }}
              />
              <InputText
                maxLength={2}
                placeholder="UF"
                inputSize="60px"
                value={deliveryAddress?.uf}
                onChange={(e) => {
                  onChangeDeliveryAddress("uf", e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="Checkout__order__container">
          <CheckoutTitle
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={<CurrencyDollar size="22" color="var(--color-purple)" />}
          />
          <div className="Checkout__order__container__payment_options">
            <button
              className={`Checkout__order__container__payment_options--button ${
                selectedPaymentOption === "credit"
                  ? "Checkout__order__container__payment_options--button_selected"
                  : ""
              } button-m`}
              onClick={() => onChangeSelectedPaymentOption("credit")}
            >
              <CreditCard size="16" />
              <span className="">Cartão de Crédito</span>
            </button>
            <button
              className={`Checkout__order__container__payment_options--button ${
                selectedPaymentOption === "debit"
                  ? "Checkout__order__container__payment_options--button_selected"
                  : ""
              } button-m`}
              onClick={() => onChangeSelectedPaymentOption("debit")}
            >
              <Bank size="16" />
              <span className="">Cartão de Débito</span>
            </button>
            <button
              className={`Checkout__order__container__payment_options--button ${
                selectedPaymentOption === "money"
                  ? "Checkout__order__container__payment_options--button_selected"
                  : ""
              } button-m`}
              onClick={() => onChangeSelectedPaymentOption("money")}
            >
              <Money size="16" />
              <span className="">Dinheiro</span>
            </button>
          </div>
        </div>
      </div>
      <div className="Checkout__container--right">
        <h3 className="Checkout__cart__subtitle title-xs">
          Cafés selecionados
        </h3>
        <div className="Checkout__cart__container">
          {chartProducts.map((product) => (
            <div key={product.id} className="Checkout__cart__item">
              <div className="Checkout__cart__item--infos">
                <img width={64} height={64} src={product.img} alt="" />
                <div className="Checkout__cart__item--infos-item">
                  <h5 className="text-m-regular">{product.name}</h5>
                  <div className="Checkout__cart__item__options">
                    <InputQuantity
                      key={product.id}
                      onAddItem={() => addItem(product.id)}
                      onSubItem={() => subItem(product.id)}
                      value={quantities[product.id]}
                    />
                    <button
                      onClick={() => {
                        removeItem(product.id);
                      }}
                      className="Checkout__cart__item__options__button_remove button-m"
                    >
                      <Trash size={16} color="var(--color-purple)" />
                      Remover
                    </button>
                  </div>
                </div>
              </div>
              <span className="text-m-bold">
                {(
                  Number(product.price.replace(",", ".")) *
                  quantities[product.id]
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          ))}
          <div className="Checkout__container--divider" />
          <div className="Checkout__container__resume_chart">
            <div className="Checkout__container__resume_chart--total_items text-s">
              <span>Total de itens</span>
              <span>
                {totalItemsPrice.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <div className="Checkout__container__resume_chart--delivery text-s">
              <span>Entrega</span>
              <span>
                {totalDeliveryPrice.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <div className="Checkout__container__resume_chart--total text-l-bold">
              <strong>Total</strong>
              <strong>
                {totalPrice.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </div>
          </div>
          <Link
            to={"/success"}
            className="Checkout__container--btn_confirm button-g ${}"
          >
            Confirmar Pedido
          </Link>
        </div>
      </div>
    </div>
  );
}
