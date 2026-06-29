import { useState } from 'react';
import { useNavigate } from 'react-router';

const Header = () => {

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-blue-600 font-bold text-xl">BrandKu</h1>

        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="/tentang" className="text-gray-600 hover:text-blue-600">Tentang</a>
          <a href="/harga" className="text-gray-600 hover:text-blue-600">Harga</a>
        </nav>

        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(prev => !prev)}>
              {isMenuOpen ? 'X' : '☰'}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-md border-t p-4 flex flex-col space-y-3 z-50">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/tentang" className="text-gray-700 hover:text-blue-600">Tentang</a>
          <a href="/harga" className="text-gray-700 hover:text-blue-600">Harga</a>
        </nav>
      )}
    </header>
  );
};

export default Header;