import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "./reducer";
import { getAllForms } from "./app/actions";
const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}
const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);
store.dispatch(getAllForms());
ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
     <Router>
    <App />
     </Router>
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
