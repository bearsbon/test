import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ISquare, addSquare, removeSquare } from "./store/slices/squareSlice";
import Square from "./components/Square";
import { AnimatePresence } from "framer-motion";
import { RootState, AppDispatch } from "./store/store";
import Button from "./components/Button";

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

  const handleAddSquare = () => {
    setIsAnimating(true);
    dispatch(addSquare());
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  return (
    <div>
      <div className="buttons">
        <Button
          text={"Добавить"}
          handleAddSquare={handleAddSquare}
          isAnimating={isAnimating}
        />
        <Button
          text={"Удалить"}
          handleAddSquare={handleRemoveSquare}
          isAnimating={isAnimating || squares.length === 0}
        />
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
