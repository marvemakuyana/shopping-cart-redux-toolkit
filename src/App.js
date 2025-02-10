import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="bg-white">
      <BrowserRouter>
        <Navbar />
        <main className="max-w-7xl mx-auto min-h-screen">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<div>Cart Page</div>}></Route>
            <Route path="/products" element={<div>Products Page</div>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
