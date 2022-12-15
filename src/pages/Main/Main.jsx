import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import "./main.css";

function Main() {
  return (
    <div className="main">
      <Navbar />
      <Card />
      <h1 className="title">Developer</h1>
      <div className="bg">
        <img src="images/background.png" />
      </div>
    </div>
  );
}

export default Main;
