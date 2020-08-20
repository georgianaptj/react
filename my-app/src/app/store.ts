import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

//creates the redux store instance

//The current state lives in an object called store
//The store is created by passing in a reducer, and has a method called getState that returns the current state value
// store runs the root reducer whenever an action is dispatched
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//getState returns the current state value
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
