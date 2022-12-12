import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [logoOn, setLogoOn] = useState(true);

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
      <ul>
        <li>Projects</li>
        <li>About</li>
      </ul>
      <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
