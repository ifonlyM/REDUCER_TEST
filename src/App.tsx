import React, { useReducer } from "react";
import "./App.css";

// 상태의 타입 정의
interface State {
  count: number;
}

// 액션의 타입 정의
type Action = 
  | { type: "increment" }
  | { type: "decrement" } 
  | { type: "reset" };

// 초기 상태
const initialState: State = { count: 0 };

// 리듀서 함수 정의
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    case "reset": return initialState;
    default:
      throw new Error("Unhadled action type");
  }
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default App;
