import React from "react";
import "./Todo.css";
import { connect } from "react-redux";
import { addItem, removeItem } from "../action";
import { useSelector, useDispatch } from "react-redux";

const Todo = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef(null);

  const addTodoHandler = () => {
    if (input === "") return;
    dispatch(addItem(input));
    setInput("");
    inputRef.current.focus();
  };

  const deleteTodoHandler = (id) => {
    console.log(id);
    dispatch(removeItem(id));
  };

  React.useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="Todo">
      <div className="form">
        <input
          value={input}
          ref={inputRef}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter your task"
        />
        <button onClick={addTodoHandler}>Add</button>
      </div>
      <div className="list">
        <ul className="list-items">
          {state.items.map((item) => (
            <li
              onClick={() => deleteTodoHandler(item.id)}
              key={item.id}
              className="items"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const stateMapToProp = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(stateMapToProp)(Todo);
