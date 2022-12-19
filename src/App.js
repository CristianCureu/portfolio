import "./app.css";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/About/About";
import Main from "./pages/Main/Main";
import Projects from "./pages/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <div className="bg">
        <img src="images/background.png" />
      </div>
      <Navbar />
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
