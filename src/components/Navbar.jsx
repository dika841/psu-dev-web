import React from "react";
import logo from "../assets/Logo.png";
const Navbar = () => {
  return (
    <header className="p-3">
      <nav className="flex justify-between items-center px-4">
        <figure className="flex items-center gap-3">
          <img className="h-12 w-12" src={logo} alt="" />
          <figcaption className="text-white text-3xl font-bold">PSU</figcaption>
        </figure>
        <ul className="flex items-center gap-10 font-medium text-white text-lg">
          <li>Beranda</li>
          <li>Daftar</li>
          <li>Service</li>
          <li>Tentang Kami</li>
          <li>Library</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
