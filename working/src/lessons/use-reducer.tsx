import { useReducer } from "react";

// ???: How to make ts work like this:
// if `ReducerAction.type` is setUsername, then username have to be required
interface ReducerState {
  count: number;
  username?: string;
}

interface ReducerACtion {
  type: "buttonClick" | "default" | "setUsername";
  value?: string;
}

const reducer = (state: ReducerState, action: ReducerACtion) => {
  switch (action.type) {
    case "buttonClick":
      return { ...state, count: state.count + 1 };
    case "setUsername":
      return { ...state, username: action.value };
    default:
      return state;
  }
};

export const UseReducer = () => {
  let [state, dispatch] = useReducer(reducer, {
    count: 0,
    username: "",
  });

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setUsername", value: e.target.value });
  };

  return (
    <>
      <h1>Count is {state.count}</h1>
      <h1>Username is {state.username}</h1>
      <button onClick={() => dispatch({ type: "buttonClick" })}>Click</button>
      <input
        type="text"
        value={state.username}
        onChange={handleChangeUsername}
      />
    </>
  );
};
