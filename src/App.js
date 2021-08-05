import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { count: state.count + 1, showText: !state.showText };
    }
    case "SHOWTEXT": {
      return { count: state.count, showText: state.showText };
    }
    default: {
      return state;
    }
  }
};
function ReduceerExaple() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <>
      <p>{state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "SHOWTEXT" });
        }}
      >
        {" "}
        Increment
      </button>
      <p> {state.showText && <p>Show Text</p>} </p>
    </>
  );
}

export default ReduceerExaple;
