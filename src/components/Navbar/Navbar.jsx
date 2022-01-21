import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [navbarShown, setNavbarShown] = useState(false);

  return (
    <nav>
      <img
        src="/logo.png"
        alt="StartLadder Logo"
        width={125}
        style={{ zIndex: 30 }}
      />

      <ul className="desktop-nav">
        <li className="dropdown">Programs</li>
        <li className="dropdown">Live Projects</li>
        <li>Community</li>
        <li className="dropdown">Jobs</li>
        <li>About</li>
      </ul>
      <button className="expander" onClick={() => setNavbarShown(!navbarShown)}>
        <svg
          width="25"
          height="14"
          viewBox="0 0 25 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            transform-origin="0 1"
            transform={navbarShown ? 'rotate(30)' : ''}
            style={{ transition: 'transform 200ms ease' }}
            y1="1"
            x2="25"
            y2="1"
            stroke="#6776FF"
            stroke-width="2"
          />
          <line
            opacity={navbarShown ? '0' : '1'}
            style={{ transition: 'opacity 200ms ease' }}
            y1="7"
            x2="25"
            y2="7"
            stroke="#6776FF"
            stroke-width="2"
          />
          <line
            transform-origin="0 14"
            style={{ transition: 'transform 200ms ease' }}
            transform={navbarShown ? 'rotate(-30)' : ''}
            y1="13"
            x2="25"
            y2="13"
            stroke="#6776FF"
            stroke-width="2"
          />
        </svg>
      </button>
      <div
        className="mobile-nav"
        style={navbarShown ? { transform: 'translateY(0)', opacity: '1' } : {}}
      >
        <ul>
          <li className="dropdown">Programs</li>
          <li className="dropdown">Live Projects</li>
          <li>Community</li>
          <li className="dropdown">Jobs</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
}
