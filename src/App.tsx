import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrderPage from "./sites/OrderPage";
import HomePage from "./sites/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/OrderPage" element={<OrderPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
