import { useState } from "react";
import "./App.css";

function App() {
  const [count, updateCount] = useState(0);
  const [history, updateHistory] = useState([]);
  let tabular = [];
  if (history.length > 0) {
    // TODO: can't push only open tag , careful while using arrow needs return or one line no {}
    for (let i = 0; i < history.length - 3; i += 3) {
      tabular.push(
        <tr key={i}>
          {history.slice(i, i + 3).map((item, index) => {
            return <td key={index}>{item}</td>;
          })}
        </tr>,
      );
    }
    console.log(tabular);
  }
  function updateStateHistory(operation) {
    // TODO: bestu
    updateHistory((prevHistory) => [
      ...prevHistory,
      operation,
      count,
      calculate(operation),
    ]);
  }
  function calculate(operation) {
    let value = count;
    switch (operation) {
      case "+":
        value = value + 2;
        break;
      case "-":
        value -= 2;
        break;
      case "*":
        value *= 2;
        break;
      case "/":
        value /= 2;
        break;
    }
    updateCount(value);
    return value;
  }

  return (
    <>
      <button onClick={updateStateHistory.bind(null, "+")}>+</button>
      <button onClick={updateStateHistory.bind(null, "-")}>-</button>
      <span>{count}</span>
      <button onClick={updateStateHistory.bind(null, "*")}>*</button>
      <button onClick={updateStateHistory.bind(null, "/")}>/</button>
      <div>
        <table>
          <thead>
            <tr>
              <th>Operation</th>
              <th>Old value</th>
              <th>New value</th>
            </tr>
          </thead>
          <tbody>{tabular}</tbody>
        </table>
      </div>
    </>
  );
}

export default App;
