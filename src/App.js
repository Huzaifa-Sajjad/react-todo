import React from "react";
import List from "./components/List";
import { Provider } from "react-redux";
import store from "./store";

import "./components/style.css";

function App() {
  return (
    <Provider store={store}>
      <div className="container my-4">
        <h1 className="display-4 text-center"> Grocery App</h1>
        <List />
      </div>
    </Provider>
  );
}

export default App;
