import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout/DefaultLayout";
import { Home } from "../container/Home/Home";
import { Checkout } from "../container/Checkout/Checkout";
import Success from "../container/Success/Success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
