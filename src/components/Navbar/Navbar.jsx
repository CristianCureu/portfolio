import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [logoOn, setLogoOn] = useState(true);
  const [navActive, setNavActive] = useState(false);

  const onClickLogo = () => {
    setTimeout(() => {
      setLogoOn(!logoOn);
    }, 50);
  };
  return (
    <nav>
      <div className="logo" onClick={() => onClickLogo()}>
        {logoOn ? (
          <img src="images/logoON.png" />
        ) : (
          <img src="images/logoOFF.png" />
        )}
      </div>
      <ul className={navActive ? "nav-active" : ""}>
        <li>Projects</li>
        <li>About</li>
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
