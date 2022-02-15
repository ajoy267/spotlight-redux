import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DarkModeToggle from '../../hooks/DarkMode';
import { decrement, increment } from './counterSlice';

const Counter = () => {
  // The function below is called a selector and allows us 2 select a value from
  // the state.
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
      </div>
      <DarkModeToggle />
    </div>
  );
};

export default Counter;
