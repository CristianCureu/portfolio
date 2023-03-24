import "../pages.css";
import { motion as m, AnimatePresence } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Projects() {
  return (
    <Carousel>
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="projects"
      >
        <div className="description">
          <m.p
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Official OptiDora Optic Website
          </m.p>
        </div>
        <a
          className="projects-image"
          href="https://optidora.ro/"
          target="_blank"
        >
          <img src="images/opof.png" alt="optidora" />
        </a>
      </m.div>
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="projects"
      >
        <div className="description">
          <m.p
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Created for an ophthalmology office with the purpose of sending
            emails and receiving feedback
          </m.p>
        </div>
        <a
          className="projects-image"
          href="https://optidora.onrender.com/"
          target="_blank"
        >
          <img src="images/op.png" alt="optidora" />
        </a>
        <div className="note">
          <m.p
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Note: Wait 30sec after the first request for the server to start
          </m.p>
        </div>
      </m.div>
      <m.div>
        <h2 className="projects" style={{ color: "white" }}>
          The rest of the projects are available on GitHub.
        </h2>
      </m.div>
    </Carousel>
  );
}

export default Projects;
