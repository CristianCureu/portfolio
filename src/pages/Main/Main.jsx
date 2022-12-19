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
    </m.div>
  );
}

export default Main;
