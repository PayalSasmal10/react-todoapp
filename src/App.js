import "./App.css";
import JSONDATA from "./JSONDATA.json";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [inputChange, setInputChange] = useState("");

  // useEffect(() => {
  //   setItems(JSONDATA);
  // }, []);

  // Taking input from the users
  const InputChangeHandler = (e) => {
    setInputChange(e.target.value);
  };

  // add data
  const addHandler = () => {
    const newItems = { task: inputChange };
    setItems([...items, newItems]);
    setInputChange("");
  };

  return (
    <div className="App">
      <div className="outerClass">
        <h1>ToDo App</h1>
        {items.map((val, id) => {
          return (
            <div key={id}>{val.task}</div>
          );
        })}
        <div>
          <input
            onChange={InputChangeHandler}
            placeholder="add your task here"
            value={inputChange}
          />
        </div>
        <button onClick={addHandler}>Add</button>
      </div>
    </div>
  );
}

export default App;
