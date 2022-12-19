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
          Projects
        </m.h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At maxime
        voluptate blanditiis nihil, labore aliquam voluptatibus eius, eligendi
        quibusdam vero ipsam ipsum eaque, cumque molestiae fugit magnam dicta
        vel repellendus.
      </p>
    </m.div>
  );
}

export default Projects;
