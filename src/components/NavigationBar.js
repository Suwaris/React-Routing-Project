import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import imageSrc from '../images/logo.png';
import classes from '../pages/Home.css';
import { useState } from 'react';
import LastShow from './products/LastShow';

function NavigationBar({ products }) {
  const [selectedBrand, setSelectedBrand] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
  };

  const handleBrandChange = (event) => {
    const selectedBrand = event.target.value;
    setSelectedBrand(selectedBrand);
    console.log('Selected Brand:', selectedBrand);
  };

  return (
    <div className="header">
      <header className="container">
        <div className="column">
          <div className="logoimg">
            <img src={imageSrc} alt="MyImage" width="80px" height="80px" />
          </div>
        </div>

        <div className="column">
          <div className="container-form">
            <form className="search-form" onSubmit={handleSearch}>
              <input
                className="search-input"
                type="text"
                name="search"
                placeholder="Search..."
                autoComplete="off"
              />
              <button className="search-button" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="column">
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: '#751869', marginRight: '10px' }}
          />
          <Link to="/login" className="link-signin">
            Signin
          </Link>
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ color: '#751869', marginRight: '10px' }}
          />
          <a href="url" className="link-signup">
            View Cart
          </a>
        </div>
      </header>

      <div className="container-list">
        <ul className="header-list">
          <li>Home</li>
          <li className="dropdown">
            <select value={selectedBrand} onChange={handleBrandChange}>
              <option value="">Categories</option>
              <option value="spa ceylon">Spa Ceylon</option>
              <option value="viana">Viana</option>
              <option value="luv esence">Luv Esence</option>
            </select>
          </li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>

      <LastShow propValue={selectedBrand} products={products} />
    </div>
  );
}

export default NavigationBar;
