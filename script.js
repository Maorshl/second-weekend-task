"use strict";
const mainTable = [
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
  },
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
  },
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
  },
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
  },
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
  },
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
  },
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
  },
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
  },
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
  },
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
  },
];

for (let i = 0; i < mainTable.length; i++) {
  let timeSpent = mainTable[i].finishedAt - mainTable[i].startedAt;
  timeSpent = Math.floor(timeSpent * 2.77777778 * 10 ** -7);
  mainTable[i].totalTime = timeSpent;
  mainTable[i].tasksFinishedPrecent = Math.floor(
    (mainTable[i].tasksFinished / mainTable[i].tasksGiven) * 100
  );
}

//console.log(mainTable[0].tasksFinishedPrecent());
let body = document.getElementsByTagName("body")[0];
let tbl = document.createElement("table");
let tblBody = document.createElement("tbody");

for (let i = 0; i <= 11; i++) {
  // creates a table row
  let row = document.createElement("tr");

  for (let prop in mainTable[i]) {
    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    let cell = document.createElement("td");
    let cellText = document.createTextNode(`${mainTable[i][prop]}`);
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  tblBody.appendChild(row);
}
tbl.appendChild(tblBody);
// appends <table> into <body>
body.appendChild(tbl);
// sets the border attribute of tbl to 2;
tbl.setAttribute("border", "5");
