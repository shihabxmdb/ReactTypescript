import { useReducer } from "react";
type StateType = {
  count: number;
};
type ActionType = {
  type: string;
  payload: number;
};
const reduce = (state: StateType, action: ActionType) => {
  if (action.type == "increment") {
    return { count: state.count + action.payload };
  }
  if (action.type == "decrement") {
    return { count: state.count - action.payload };
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
    </div>
  );
};
