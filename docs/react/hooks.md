### useImmer

similar to useState, can send the only part you would like to change,facilitates the way you mutate the context data structures
[举例](https://stackoverflow.com/questions/61669930/whats-the-difference-between-usestate-and-useimmer)


### useContext
provides data to components no matter how deep they are in the components tree

Context provides a way to pass data through the component tree without having to pass props down manually at every level

### useReducer
与useContext一起用

```js
import React, { useReducer, useContext } from "react";
const CounterContext = React.createContext();

const ComponentB = () => {
  console.log("ComponentB update");
  const { count, countDispatch } = useContext(CounterContext);
  return (
    <div>
      <div>ComponentB-level-3-count-{count}</div>
      <button
        onClick={() => {
          countDispatch("increment");
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          countDispatch("decrement");
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          countDispatch("reset");
        }}
      >
        reset
      </button>
    </div>
  );
};

const ComponentA = () => {
  console.log("ComponentA update");
  return (
    <div>
      ComponentA-level-2
      <ComponentB />
    </div>
  );
};

const initialState = 1;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseContextUseReducer = () => {
  const [count, countDispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ count, countDispatch }}>
      level-1-count-{count}
      <ComponentA />
    </CounterContext.Provider>
  );
};

export default UseContextUseReducer;

```
### redux vs useContext

[link](https://www.framelessgrid.com/react-hooks-vs-redux-for-state-management-in-2021/)
