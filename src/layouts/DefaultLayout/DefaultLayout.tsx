import React from "react";
import './DefaultLayout.scss'

import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";

export function DefaultLayout() {
  return (
    <div className="DefaultLayout">
      <Header />
      <Outlet />
    </div>
  );
}
