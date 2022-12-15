import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./navbar.css";

function Navbar() {
  const [logoOn, setLogoOn] = useState(true);
  const [navActive, setNavActive] = useState(false);

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
        <HashLink
          to="#projects"
          smooth
          onClick={() => setNavActive(!navActive)}
        >
          Projects
        </HashLink>
        <HashLink to="#about" smooth>
          About
        </HashLink>
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
