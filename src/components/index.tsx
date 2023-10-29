import { useReducer } from "react";
type StateType = {
  count: number;
};
type ActionType = {
  type: "increment" | "decrement";
  payload: number;
};
type ActionTypeReset = {
  type: "reset";
};

const reduce = (state: StateType, action: ActionType | ActionTypeReset) => {
  if (action.type == "increment") {
    return { count: state.count + action.payload };
  }
  if (action.type == "decrement") {
    return { count: state.count - action.payload };
  }
  if (action.type == "reset") {
    return { count: 0 };
  }
  return state;
};

export const Index = () => {
  const [state, dispatch] = useReducer(reduce, { count: 0 });
  return (
    <div>
      <p>count: {state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "increment", payload: 1 });
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
};
