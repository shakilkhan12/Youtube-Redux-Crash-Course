import React from 'react';
import {Provider} from "react-redux"
import './App.css';
import Form from './Form';
import store from "./store/"
import Users from "./Users"

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Form />
      <Users />
      </div>
    </Provider>
    
  );
}

export default App;
