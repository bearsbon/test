import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ISquare, addSquare, removeSquare } from "./store/slices/squareSlice";
import Square from "./components/Square";
import { AnimatePresence } from "framer-motion";
import { RootState, AppDispatch } from "./store/store";

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const squares = useSelector((state: RootState) => state.squares);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleRemoveSquare = () => {
    setIsAnimating(true);
    dispatch(removeSquare());
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
    console.log(squares);
  };

  return (
    <div>
      <div className="buttons">
        <button onClick={() => dispatch(addSquare())}>Добавить</button>
        <button
          onClick={handleRemoveSquare}
          disabled={isAnimating || squares.length === 0}
        >
          Удалить
        </button>
      </div>
      <div className="container">
        <AnimatePresence initial={false}>
          {squares.map((square: ISquare) => (
            <Square key={square.id} color={square.color} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
