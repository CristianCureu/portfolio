import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";
import "./main.css";

function Main() {
  return (
    <div className="main">
      <div className="bg">
        <img src="images/background.png" />
      </div>
      <h1 className="title">Developer</h1>
      <Navbar />
      <Card />
    </div>
  );
}

export default Main;
