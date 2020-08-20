import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

//react component that shows the UI for the counter feature

export function Counter() {
  //selectCount selecteaza o valoare din state
  //Selectors are functions that know how to extract specific pieces of information from a store state value
  const count = useSelector(selectCount);

  const dispatch = useDispatch();

  //State: a counter value
  const [incrementAmount, setIncrementAmount] = useState("2");

  // View: the UI definition
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          //The only way to update the state is to call store.dispatch() and pass in an action object. Dispatching actions is like "triggering an event"
          //The store will run its reducer function and save the new state value inside.
          //Something happens in the app, such as a user clicking a button
          //The app code dispatches an action to the Redux store, like dispatch({type: 'counter/increment'}) or dispatch(increment()), where increment() is a action creator and returns an object of type action.
          //The store runs the reducer function again with the previous state and the current action, and saves the return value as the new state.
          //The store notifies the UI that the state has changed and the UI re-renders.
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
