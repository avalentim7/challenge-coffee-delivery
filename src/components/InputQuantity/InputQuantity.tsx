import React from "react";
import { Minus, Plus } from "@phosphor-icons/react";
import "./InputQuantity.scss";

interface InputQuantityProps {
  onAddItem: () => void;
  onSubItem: () => void;
  value: number;
}

function InputQuantity({ onAddItem, onSubItem, value }: InputQuantityProps) {
  return (
    <div className="InputQuantity">
      <Minus size={14} weight="bold" onChange={onSubItem} />
      <span className="text-m-regular">{value}</span>
      <Plus size={14} weight="bold" onChange={onAddItem} />
    </div>
  );
}

export default InputQuantity;
