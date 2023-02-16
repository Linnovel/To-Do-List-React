import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const agregarTarea = (e) => {
    e.preventDefault();
    if (inputValue.length === 0) return;
    setTodos(todos.concat(inputValue));
    setInputValue("");
  };

  return (
    <div className="container">
      <h1>My ToDo List</h1>
      <ul>
        <li style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                agregarTarea(e);
              }
            }}
            placeholder="Give me New Task!"
          />
          <i
            className="fas fa-plus"
            onClick={agregarTarea}
            style={{ cursor: "pointer", marginLeft: "0.5em" }}
          ></i>
        </li>
        {todos.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <i className="fas fa-trash-alt delete-button" onClick={() =>
                setTodos(todos.filter((t, currentIndex) => index !== currentIndex))
              }
            ></i>{" "}
          </li>
        ))}
      </ul>
      <div>{todos.length ? `${todos.length} tasks` : "No pending list, add more?" }</div>
    </div>
  );
};

export default Home;
