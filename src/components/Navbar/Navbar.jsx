import "./navbar.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion as m } from "framer-motion";

function Navbar() {
  const [logoOn, setLogoOn] = useState(true);
  const [navActive, setNavActive] = useState(false);
  const location = useLocation();

  return (
    <m.nav>
      <div className="logo" onClick={() => setLogoOn(!logoOn)}>
        {logoOn ? (
          <img src="images/logoON.png" />
        ) : (
          <img src="images/logoOFF.png" />
        )}
      </div>
      <ul className={navActive ? "nav-active" : ""}>
        <div className="link">
          <Link to="/" onClick={() => setNavActive(!navActive)}>
            Home
          </Link>
          {location.pathname === "/" ? (
            <m.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5 }}
              className="active"
            ></m.span>
          ) : (
            ""
          )}
        </div>
        <div className="link">
          <Link to="/projects" onClick={() => setNavActive(!navActive)}>
            Projects
          </Link>
          {location.pathname === "/projects" ? (
            <m.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5 }}
              className="active"
            ></m.span>
          ) : (
            ""
          )}
        </div>
        <div className="link">
          <Link to="/about" onClick={() => setNavActive(!navActive)}>
            About
          </Link>
          {location.pathname === "/about" ? (
            <m.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5 }}
              className="active"
            ></m.span>
          ) : (
            ""
          )}
        </div>
      </ul>
      <div
        className={navActive ? "burger toggle" : "burger"}
        onClick={() => setNavActive(!navActive)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </m.nav>
  );
}

export default Navbar;
