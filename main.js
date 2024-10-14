// main.js

const dbWorker = new Worker("dbWorker.js");
const chartWorker = new Worker("chartWorker.js");

document.getElementById("dataForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedValue = document.querySelector("input[name='data']:checked").value;
  dbWorker.postMessage(Number(selectedValue));
});

dbWorker.onmessage = (event) => {
  if (event.data === "Data added to IndexedDB") {
    console.log("Data added to IndexedDB");
  }
};

chartWorker.onmessage = (event) => {
  const data = event.data;

  const mermaidData = `xychart-beta
  title "Sales Revenue"
  x-axis [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]
  y-axis "Revenue (in $)" 4000 --> 11000
  bar [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
  line [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
  `;
  /*
  const mermaidData = `
    graph LR
    XYChart
      ${data.map((value, index) => `data${index}([${index}, ${value}])`).join("\n")}
  `;
  const mermaidData = `
    xychart-beta
    title "Student Votes"
    x-axis [no, indifferent, yes]
    y-axis "Votes Registered" 0 --> 30
    bar [${data.map((value, index) => `${value}`).join(",")}]
  `;
  */

  document.getElementById("chart").textContent = mermaidData;
  //mermaid.init(undefined, document.getElementById("chart"));
  /*
  mermaid.render("generatedChart", mermaidData, (svgCode) => {
    document.getElementById("chart").innerHTML = svgCode;
  });
  */
};
