import "../styles/tailwind.css";
import "../styles/htmldisplay.css"; // Import your CSS file
export default function HTMLDisplay(htmlContent) {
  return (
    <div className="wdisplay whitespace-pre p-4 overflow-auto absolute">
      <div
        id="invisible_div"
        className="absolute m-4 top-0 left-0 text-transparent"
      >
        {htmlContent}
      </div>
      <div className="absolute m-4 top-0 left-0">{htmlContent}</div>
    </div>
  );
}
