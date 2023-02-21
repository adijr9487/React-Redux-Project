import React from "react";
import "./Todo.css";
import { connect } from "react-redux";
import { addItem, removeItem, completeItem } from "../action";

class Todo extends React.Component {
  state = {
    input: "",
  };
  myRef = React.createRef();

  addTodoHandler = () => {
    if (this.state.input === "") return;
    this.props.dispatch(addItem(this.state.input));
    this.setState({ input: "" });
    this.myRef.current.focus();
    console.log(this.props);
  };

  deleteTodoHandler = (id) => {
    // console.log(id);
    this.props.dispatch(removeItem(id));
  };

  completeTodoHandler = (id) => {
    this.props.dispatch(completeItem(id));
  };

  render() {
    return (
      <div className="Todo">
        <div className="form">
          <input
            value={this.state.input}
            ref={this.myRef}
            onChange={(e) => this.setState({ input: e.target.value })}
            type="text"
            placeholder="Enter your task"
          />
          <button onClick={this.addTodoHandler}>Add</button>
        </div>
        <div className="list">
          <ul className="list-items">
            {this.props.state.items.map((item) => (
              <li key={item.id} className="items">
                <p
                  style={{
                    textDecoration: item.isComplete
                      ? "line-through"
                      : "initial",
                  }}
                >
                  {item.name}
                </p>
                <i
                  onClick={() => this.completeTodoHandler(item.id)}
                  className={`fa-solid fa-${
                    item.isComplete ? "close" : "check"
                  }`}
                ></i>
                <i
                  onClick={() => this.deleteTodoHandler(item.id)}
                  className="fa-solid fa-trash"
                ></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const stateMapToProp = (state) => ({ state });

export default connect(stateMapToProp)(Todo);
