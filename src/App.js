import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <Todo world={"Apps"} />
      </div>
    );
  }
}

export default App;
