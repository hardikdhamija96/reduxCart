import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
