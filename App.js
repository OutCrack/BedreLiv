import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import AppNavigation from "./navigation/AppNavigation";
import reminderReducer from "./store/reducers/reminder";
import { init } from "./helper/reminderDB";

init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch((err) => {
    console.log("Initialized database failed");
    console.log(err);
  });

const rootReducer = combineReducers({
  reminders: reminderReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
