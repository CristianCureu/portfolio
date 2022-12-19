import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [logoOn, setLogoOn] = useState(true);
  const [navActive, setNavActive] = useState(false);
  const location = useLocation();
  console.log(location.pathname);

  return (
    <nav>
      <div className="logo" onClick={() => setLogoOn(!logoOn)}>
        {logoOn ? (
          <img src="images/logoON.png" />
        ) : (
          <img src="images/logoOFF.png" />
        )}
      </div>
      <ul className={navActive ? "nav-active" : ""}>
        <Link to="/" onClick={() => setNavActive(!navActive)}>
          Home
        </Link>
        <Link to="/projects" onClick={() => setNavActive(!navActive)}>
          Projects
        </Link>
        <Link to="/about" onClick={() => setNavActive(!navActive)}>
          About
        </Link>
      </ul>
      <div
        className={navActive ? "burger toggle" : "burger"}
        onClick={() => setNavActive(!navActive)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
