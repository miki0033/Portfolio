import { motion, useScroll } from "framer-motion";

function Scroll_linked() {
  const { scrollYProgress } = useScroll();

  return <motion.h2 style={{ scaleX: scrollYProgress }} />;
}

export default Scroll_linked;
