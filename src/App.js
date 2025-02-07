import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
