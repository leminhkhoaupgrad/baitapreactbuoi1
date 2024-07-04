import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-24 border-b mb-4 bg-gray-700 text-white">
      <h1 className="text-2xl font-bold">Start Bootstrap</h1>
      <nav>
        <a href="#" className="mr-4">
          Home
        </a>
        <a href="#" className="mr-4">
          About
        </a>
        <a href="#" className="mr-4">
          Services
        </a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
