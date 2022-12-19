import "../pages.css";
import { motion as m } from "framer-motion";

function About() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="about"
    >
      <div className="title">
        <m.h2
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          About
        </m.h2>
      </div>
    </m.div>
  );
}

export default About;
