function tokenizeHTML(html) {
  const tokens = [];
  const regex = /(<[^>]+>)|([^<]+)/g;
  let match;

  while ((match = regex.exec(html))) {
    if (match[1]) {
      // It's a tag
      tokens.push({
        type: match[1][1] === "/" ? "Tag close state" : "Tag open state",
        value: match[1],
      });
    } else if (match[2]) {
      // It's text
      tokens.push({
        type: "Data state",
        value: match[2].trim(),
      });
    }
  }
  tokenized_list = tokens; // Store the tokenized list globally
  return tokens.filter((t) => t.value); // remove empty text
}

const html = `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Render Visualizer</title>
    <link rel="stylesheet" href="styles.css">
    <script src="javascript/tokenizer.js" defer></script>
</head>
<body></body>
    <header>
        <h1>Welcome to Browser Rendering Visualizer</h1>
    </header>
</html>`;

function TokenizeAndAppend(ev) {
  var tokendiv = document.getElementById("tokendiv");
  var diffval = 20;
  var marginval = -1 * diffval;
  document.getElementById("process_name").innerText = "parsing HTML...";
  processFlow.push("parsing HTML...");
  for (let token of tokenizeHTML(html)) {
    let tokenElement = document.createElement("div");
    tokenElement.className = "token " + token.type;
    tokenElement.textContent = `${token.type}: ${token.value}`;
    tokenElement.style.marginLeft = marginval + "px";
    tokendiv.appendChild(tokenElement);
    var previousTag = token.type;
  }
  ev.target.style.display = "none";
}
