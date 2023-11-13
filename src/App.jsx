import { useReducer, useState } from "react";
import { countReducer } from "./reducer/countReducer";

import "./App.css";

function App() {
  // reducer
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(countReducer, initialState);

  const plusOne = () => {
    dispatch({ type: "INCREMENT" });
  };

  const minusOne = () => {
    dispatch({ type: "DECREMENT" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <>
      <h1>{state.count}</h1>
      <div className="card">
        <button onClick={plusOne}>Plus</button>
        <button onClick={minusOne}>Minus</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
