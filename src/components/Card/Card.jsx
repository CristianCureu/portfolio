import { motion } from "framer-motion";
import { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./card.css";

const skills = [
  { name: "HTML", value: 100 },
  { name: "CSS", value: 100 },
  { name: "JavaScript", value: 90 },
  { name: "C#", value: 50 },
  { name: "React", value: 80 },
  { name: "Angular", value: 40 },
  { name: "SQL", value: 70 },
  { name: "MongoDB", value: 70 },
];
function Card() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      transition={{ layout: { duration: 0.7, type: "tween" } }}
      layout
      className={isOpen ? "card opened" : "card"}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div
        transition={{ layout: { duration: 0.7, type: "tween" } }}
        layout
        className="image"
      >
        <img style={{ borderRadius: "8px" }} src="./images/me.jpg" alt="me" />
      </motion.div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.7 }}
          className="info"
        >
            <h2 className="title">Skills</h2>
            {skills.map((skill) => (
              <div className="skills">
                <div>{skill.name}</div>
                <ProgressBar completed={skill.value} />
              </div>
            ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export default Card;
