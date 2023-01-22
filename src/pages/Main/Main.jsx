import "../pages.css";
import Card from "../../components/Card/Card";
import { motion as m } from "framer-motion";

function Main() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="main"
    >
      <Card />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="icons"
      >
        <div className="icon">
          <m.a
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            href="https://github.com/CristianCureu"
            target="_blank"
          >
            <img src="images/git.png" alt="Cristian Cureu Github Profile" />
          </m.a>
        </div>
        <div className="icon">
          <m.a
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            href="https://www.linkedin.com/in/cristian-cureu-971580212/"
            target="_blank"
          >
            <img src="images/linkedin.png" alt="Cristian Cureu Linkedin Profile" />
          </m.a>
        </div>
      </m.div>
    </m.div>
  );
}

export default Main;
