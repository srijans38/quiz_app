import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <img src="/logo.png" alt="StartLadder Logo" width={125} />

      <ul className="desktop-nav">
        <li className="dropdown">Programs</li>
        <li className="dropdown">Live Projects</li>
        <li>Community</li>
        <li className="dropdown">Jobs</li>
        <li>About</li>
      </ul>
      <button className="expander">
        <svg
          width="25"
          height="14"
          viewBox="0 0 25 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1" x2="25" y2="1" stroke="#6776FF" stroke-width="2" />
          <line y1="7" x2="25" y2="7" stroke="#6776FF" stroke-width="2" />
          <line y1="13" x2="25" y2="13" stroke="#6776FF" stroke-width="2" />
        </svg>
      </button>
    </nav>
  );
}
