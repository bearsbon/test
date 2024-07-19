interface ButtonProps {
  text: string;
  handleAddSquare: () => void;
  isAnimating: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  handleAddSquare,
  isAnimating,
}) => {
  return (
    <button onClick={handleAddSquare} disabled={isAnimating}>
      {text}
    </button>
  );
};

export default Button;
