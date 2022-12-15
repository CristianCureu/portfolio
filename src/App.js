import { BrowserRouter } from "react-router-dom";
import About from "./pages/About/About";
import Main from "./pages/Main/Main";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <Main />
      <Projects />
      <About />
    </BrowserRouter>
  );
}

export default App;
