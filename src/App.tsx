import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router.tsx";
import { CartProvider } from "./context/CartContext.tsx";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
