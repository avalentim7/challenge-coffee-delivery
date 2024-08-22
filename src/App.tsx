import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router.tsx";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
