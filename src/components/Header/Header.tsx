import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li><a href="/">Community</a></li>
            <li><a href="/">Books</a></li>
            <li><a href="/">Recipe Index</a></li>
            <li><a href="/">Popular</a></li>
          </ul>
        </nav>
        <div className="auth">
          <a href="/register"><i className="fa fa-sign-in"></i> Register</a>

          <a href="/login"><i className="fa fa-user"></i> Login</a>
        </div>
      </header>
      <div className="header2">
        <div className="logo">
          <img src="./utils/CP-Logo1.png" alt="Cookpal Logo" />
        </div>
        <div className="search-container">
          <select className="category-dropdown">
            <option value="all">All Categories</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>

          </select>
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>

    </>


  );
};

export default Header;
