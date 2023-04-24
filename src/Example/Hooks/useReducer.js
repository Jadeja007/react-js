import React, { useReducer, useState } from "react";

function UseReducerFn() {

  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, {count: 0});

  function reducer(state, action) {
    switch(action.type) {
      case "INCREMENTR" : {
        return {count: state.count+1};
      }
      case "DECREMENTR": {
        return {count: state.count-1}
      }
      default: {
        return state
      }
    }
  }

  return (
    <div>
      <button onClick={() => dispatch({type: "DECREMENTR"})}> - </button>
      {state.count}
      <button onClick={() => dispatch({type: "INCREMENTR"})}> + </button>
    </div>
  );
}

export default UseReducerFn;
