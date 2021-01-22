"use strict";
const mainTable = [
  {},
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
    startedAt: new Date("2021-01-7-15:20"),
    finishedAt: new Date("2021-01-7-17:30"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
  },
];

for (let i = 1; i < mainTable.length; i++) {
  let timeSpent = mainTable[i].finishedAt - mainTable[i].startedAt;
  timeSpent = Math.floor(timeSpent * 2.77777778 * 10 ** -7);
  mainTable[i].totalTime = timeSpent;
  mainTable[i].tasksFinishedPrecent =
    Math.floor((mainTable[i].tasksFinished / mainTable[i].tasksGiven) * 100) +
    "%";
}

let body = document.getElementsByTagName("body")[0];
let tbl = document.createElement("table");
let tblBody = document.createElement("tbody");
const headOfColumns = [
  "Started time",
  "Finished time",
  "Tasks given",
  "Tasks finished",
  "Topic",
  "Total time",
  "Tasks completed percentage",
];
for (let i = 0; i <= 11; i++) {
  // creates a table row
  let row = document.createElement("tr");
  if (i === 0) {
    for (let j = 0; j < 7; j++) {
      let cell = document.createElement("td");
      let cellText = document.createTextNode(headOfColumns[j]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
  }
  for (let prop in mainTable[i]) {
    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    if (prop === "startedAt" || prop === "finishedAt") {
      let cell = document.createElement("td");
      let cellText = document.createTextNode(
        `${mainTable[i][prop].getHours()}:${mainTable[i][prop].getMinutes()}`
      );
      cell.appendChild(cellText);
      row.appendChild(cell);
    } else {
      let cell = document.createElement("td");
      let cellText = document.createTextNode(`${mainTable[i][prop]}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
  }
  tblBody.appendChild(row);
}
tbl.appendChild(tblBody);
// appends <table> into <body>
body.appendChild(tbl);
// sets the border attribute of tbl to 2;
tbl.setAttribute("border", "5");
