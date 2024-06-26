
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../style/App.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Event Management</h1>
        <button className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/event" onClick={toggleMenu}>Eventos</Link>
          </li>
          <li>
            <Link to="/myEvent" onClick={toggleMenu}>Meus Eventos</Link>
          </li>
          <li>
            <Link to="/login" onClick={toggleMenu}>Sair</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
