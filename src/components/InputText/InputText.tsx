import React from "react";
import "./InputText.scss";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: string;
  isOptional?: boolean;
}

function InputText({ placeholder, inputSize, isOptional, ...rest }: InputTextProps) {
  return (
    <div className="InputText" style={{ width: inputSize || "100%" }}>
      <input
        style={{ width: inputSize || "100%" }}
        type="text"
        placeholder={placeholder}
        className="text-s"
        {...rest}
      />
      {isOptional && <span className="text-s">Opcional</span>}
    </div>
  );
}

export default InputText;
