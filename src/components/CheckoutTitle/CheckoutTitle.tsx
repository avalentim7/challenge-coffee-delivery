import React from "react";
import './CheckoutTitle.scss';

interface CheckoutTitleProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

function CheckoutTitle({title, subtitle, icon}: CheckoutTitleProps) {
  return (
    <div className="CheckoutTitle">
      {icon}
      <div>
        <h5 className="text-m-regular">{title}</h5>
        <span className="text-s">
          {subtitle}
        </span>
      </div>
    </div>
  );
}

export default CheckoutTitle;
