import React from "react";

// TODO routing
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";


import "./index.css";
import App from "./App";

// TODO redux
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
