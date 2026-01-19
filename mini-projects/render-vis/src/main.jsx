import { React, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles/tailwind.css";
import "./styles/htmldisplay.css";
import ReactDOM from "react-dom";

// Components Imports
import RenderingEngine from "./components/renderingEngine";
import rawHTML from "../index.html?raw"; // Importing HTML file as raw text
import HTMLDisplay from "./components/htmldisplay";

let htmldisproot = createRoot(document.getElementById("htmlpreview"));
function App() {
  let [htmldisplayed, setDisplayState] = useState(false);

  function showHTMLPreview(ev) {
    let htmldisp = null;
    if (htmldisplayed == false) {
      htmldisp = HTMLDisplay(rawHTML);
      setDisplayState(true);
      ev.target.innerText = "Hide HTML Preview";
      ev.target.style.backgroundColor = "oklch(0.74 0.15 261.24)";
    } else {
      setDisplayState(false);
      ev.target.innerText = "Show HTML Preview";
      ev.target.style.backgroundColor = null;
    }
    htmldisproot.render(
      ReactDOM.createPortal(
        <div>{htmldisp}</div>,
        document.getElementById("htmlpreview"),
      ),
    );
  }

  function headingComponent() {
    return (
      <div>
        <div className="bg-gray-800 text-white p-2 block">
          <header className="justify-center font-bold flex w-full text-3xl">
            <h1>Browser Rendering Visualizer</h1>
          </header>
          <RenderingEngine />
        </div>
      </div>
    );
  }

  const heading = headingComponent();

  return (
    <div>
      {heading}
      <div className="buttons m-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={showHTMLPreview}
          style={{ width: "190px" }}
        >
          {"Show HTML Preview"}
        </button>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
