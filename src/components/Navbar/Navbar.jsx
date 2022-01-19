import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <img src="/logo.png" alt="StartLadder Logo" width={125} />

      <ul>
        <li className="dropdown">Programs</li>
        <li className="dropdown">Live Projects</li>
        <li>Community</li>
        <li className="dropdown">Jobs</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
