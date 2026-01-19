import "../styles/tailwind.css"; // Import your CSS file
let renderingEngine;
const userAgent = navigator.userAgent;
if (
  userAgent.includes("Chrome") &&
  !userAgent.includes("Edg") &&
  !userAgent.includes("OPR")
) {
  renderingEngine = "WebKit";
} else if (userAgent.includes("Firefox")) {
  renderingEngine = "Gecko";
} else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
  renderingEngine = "WebKit";
} else if (userAgent.includes("Edg")) {
  renderingEngine = "Blink";
} else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
  renderingEngine = "Blink";
}
export default function RenderingEngine() {
  let renderspan =
    renderingEngine == "WebKit" ? (
      <span className="text-green-600">{renderingEngine}</span>
    ) : (
      <span className="text-orange-500">{renderingEngine}</span>
    ); //<span>minor process changes may be there in this engine, since this was concentrated on WebKit</span>
  return <span>Rendering Engine: {renderspan}</span>;
}
let nonwebkit_equivalents = {
  "Render tree": "Render Object",
  layout: "Reflow",
  extra: "Frame tree",
};
