import React, { createContext, useContext, useState } from "react";

type PaymentOptionsProps = "credit" | "debit" | "money";

interface DeliveryAddressProps {
  cep: number;
  street: string;
  streetNumber: number;
  complement?: string;
  neighborhood: string;
  city: string;
  uf: string;
}

interface CartContextProps {
  quantities: { [key: string]: number };
  selectedPaymentOption: PaymentOptionsProps;
  addItem: (productId: string) => void;
  subItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  onChangeSelectedPaymentOption: (paymentOption: PaymentOptionsProps) => void;
  deliveryAddress: DeliveryAddressProps | null;
  onChangeDeliveryAddress: (key: keyof DeliveryAddressProps, value: string) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Necessário ser utilizado com um CartProvider");
  }

  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [selectedPaymentOption, setSelectedPaymentOption] = useState<PaymentOptionsProps>("credit");
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddressProps | null>(null);

  const addItem = (productId: string) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const subItem = (productId: string) => {
    setQuantities((prevQuantities) => {
      const newQuantity = (prevQuantities[productId] || 0) - 1;
      return {
        ...prevQuantities,
        [productId]: newQuantity >= 0 ? newQuantity : 0,
      };
    });
  };

  const removeItem = (productId: string) => {
    const updatedQuantities = { ...quantities };
    delete updatedQuantities[productId];

    setQuantities(updatedQuantities);
  };

  const onChangeSelectedPaymentOption = (
    paymentOption: PaymentOptionsProps
  ) => {
    setSelectedPaymentOption(paymentOption);
  };

  const onChangeDeliveryAddress = (key: keyof DeliveryAddressProps, value: string | number) => {
    setDeliveryAddress((prevAddress) => ({
      ...(prevAddress as DeliveryAddressProps),
      [key]: value,
    }));
  };

  return (
    <CartContext.Provider
      value={{
        quantities,
        addItem,
        subItem,
        removeItem,
        selectedPaymentOption,
        onChangeSelectedPaymentOption,
        deliveryAddress,
        onChangeDeliveryAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
