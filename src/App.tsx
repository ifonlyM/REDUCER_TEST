import React, { useReducer } from "react";
import "./App.css";

// 상태의 타입 정의
interface State {
  count: number;
  isOn: boolean;
}

// 액션의 타입 정의
type Action = 
  | { type: "increment" }
  | { type: "decrement" } 
  | { type: "reset" }
  | { type: "toggle" };

// 초기 상태
const initialState: State = { count: 0, isOn: false };

// 리듀서 함수 정의
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment": return { ...state, count: state.count + 1 };
    case "decrement": return { ...state, count: state.count - 1 };
    case "reset":     return initialState;
    case "toggle":    return { ...state, isOn: !state.isOn };
    default:
      throw new Error("Unhadled action type");
  }
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>카운터와 토글</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <p>토글 상태: { state.isOn ? "ON" : "OFF" }</p>
      <button onClick={() => dispatch({ type: "toggle" })}>
        {state.isOn ? "Turn Off" : "Turn On"}
      </button>
    </>
  );
};

export default App;
