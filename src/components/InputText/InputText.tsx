import React from "react";
import "./InputText.scss";

interface InputTextProps {
  placeholder: string;
  size?: string;
  isOptional?: boolean;
}

function InputText({ placeholder, size, isOptional }: InputTextProps) {
  return (
    <div className="InputText" style={{ width: size || "100%" }}>
      <input
        style={{ width: size || "100%" }}
        type="text"
        placeholder={placeholder}
        className="text-s"
      />
      {isOptional && <span className="text-s">Opcional</span>}
    </div>
  );
}

export default InputText;
