import "../pages.css";
import { motion as m, AnimatePresence } from "framer-motion";

function Projects() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="projects"
    >
      <div className="title">
        <m.h2
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          FullStack MERN Project
        </m.h2>
      </div>
      <div className="description">
        <m.p
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Created for an ophthalmology office with the purpose of sending emails
          and receiving feedback
        </m.p>
      </div>
      <div className="projects-image">
        <a href="https://optidora.onrender.com/" target="_blank">
          <img src="images/op.png" alt="optidora" />
        </a>
      </div>
      <div className="note">
        <m.p
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Note: Wait 30sec after the first request for the server to start
        </m.p>
      </div>
    </m.div>
  );
}

export default Projects;
