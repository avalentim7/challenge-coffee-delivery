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
      <Minus size={14} weight="bold" onClick={onSubItem} />
      <input type="number" className="text-m-regular" value={value} readOnly />
      <Plus size={14} weight="bold" onClick={onAddItem} />
    </div>
  );
}

export default InputQuantity;
