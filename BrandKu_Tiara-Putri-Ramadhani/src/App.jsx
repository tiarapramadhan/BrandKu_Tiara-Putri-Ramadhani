import {BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import Header from "./component/Header";
import { featureData } from "./data/features";
import Home from "./pages/home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";

const App = () => {
  const [features] = useState(featureData);

  return (

      <BrowserRouter>
      <Header />

      <Routes>  
        <Route path="/" element={<Home features={features} />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/harga" element={<Pricing />} />
      </Routes>

      <footer className="bg-gray-900 text-gray-400 text-center py-8 px-8 text-sm">
        <p>&copy; 2026 BrandKu. All rights reserved.</p>
      </footer>
    </BrowserRouter>
  
  );
};

export default App;