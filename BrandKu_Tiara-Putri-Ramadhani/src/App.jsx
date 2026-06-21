import { useState } from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import CardGrid from "./component/CardGrid";
import { featureData } from "./data/features";

const App = () => {
  const [features] = useState(featureData);

  return (
    <>
      <Header />

      <Hero
        title="Solusi Terbaik untuk Bisnismu"
        subtitle="Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil."
        buttonText="Mulai Gratis"
      />

      <CardGrid features={features} />

      <footer className="bg-gray-900 text-gray-400 text-center py-8 px-8 text-sm">
        <p>&copy; 2026 BrandKu. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;