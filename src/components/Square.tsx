import { motion } from "framer-motion";

interface SquareProps {
  color: string;
}

const Square: React.FC<SquareProps> = ({ color }) => {
  return (
    <motion.div
      layout
      initial={{ x: -150, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 40 }}
      className="square"
      style={{ backgroundColor: color }}
    />
  );
};

export default Square;
