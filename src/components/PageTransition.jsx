import { motion } from "framer-motion";
const MotionDiv = motion.div;

function PageTransition({ children }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {children}
    </MotionDiv>
  );
}

export default PageTransition;
