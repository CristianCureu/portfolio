import "./app.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Main from "./pages/Main/Main";
import Projects from "./pages/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <div className="bg">
        <img src="images/background.png" />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
