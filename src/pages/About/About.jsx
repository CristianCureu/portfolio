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
      <div className="description-about">
        <m.p
          initial={{ y: "130%" }}
          animate={{ y: "0%" }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          I am currently working at Indeco Soft as a React Native developer. My
          last work experience was at Faro Development. I worked as a web
          developer intern for three and a half months with React.js,
          Express.js, MongoDB, Gitlab, Firebase. Last year I also had a work
          experience at Indeco Soft, as part of an internship.
          Besides work experience, I studied at the "Universitatea Tehnica Cluj
          Napoca" and I have a bachelor's degree in computer science. As a
          person I am open minded, perseverant, flexible and always eager to
          learn new things and tackle new challenges. I am very passionate about
          web development and web design, always trying to give my best in order
          to create “the perfect product”.
        </m.p>
      </div>
    </m.div>
  );
}

export default About;
