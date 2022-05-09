import { ProductList } from "./pages/ProductList";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
