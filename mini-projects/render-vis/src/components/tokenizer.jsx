import "../styles/tailwind.css";

//Util
function EscapeHTML(html) {
  const escaped = html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  //   '"': "&quot;", //No I18N
  //   "'": "&#x27;" //No I18N if needed clean
  return escaped;
}
export function IterateOverHTMLPreview(i, htmlRaw) {
  let invisdiv = document.getElementById("invisible_div");
  if (!invisdiv) {
    return;
  }
  let firstpart = htmlRaw.slice(0, i + 1);
  invisdiv.innerHTML = EscapeHTML(firstpart) + '<span class="blink"> </span>';
}
