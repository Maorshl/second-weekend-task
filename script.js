"use strict";
document.write("<h1>The learning table</h1>");
const mainTable = [
  //adding an empty object for the heads of the table placement
  {},
  {
    startedAt: new Date("2021-01-7-15:20"),
    finishedAt: new Date("2021-01-7-17:40"),
    tasksGiven: 15,
    tasksFinished: 6,
    topic: "html",
  },
  {
    startedAt: new Date("2021-01-7-10:10"),
    finishedAt: new Date("2021-01-7-17:15"),
    tasksGiven: 10,
    tasksFinished: 7,
    topic: "JavaScript",
  },
  {
    startedAt: new Date("2021-01-7-13:50"),
    finishedAt: new Date("2021-01-7-17:20"),
    tasksGiven: 5,
    tasksFinished: 5,
    topic: "css",
  },
  {
    startedAt: new Date("2021-01-7-09:10"),
    finishedAt: new Date("2021-01-7-13:30"),
    tasksGiven: 15,
    tasksFinished: 12,
    topic: "html",
  },
  {
    startedAt: new Date("2021-01-7-15:15"),
    finishedAt: new Date("2021-01-7-18:50"),
    tasksGiven: 9,
    tasksFinished: 6,
    topic: "css",
  },
  {
    startedAt: new Date("2021-01-7-13:50"),
    finishedAt: new Date("2021-01-7-17:10"),
    tasksGiven: 8,
    tasksFinished: 5,
    topic: "JavaScript",
  },
  {
    startedAt: new Date("2021-01-7-11:10"),
    finishedAt: new Date("2021-01-7-17:10"),
    tasksGiven: 13,
    tasksFinished: 6,
    topic: "Git",
  },
  {
    startedAt: new Date("2021-01-7-09:25"),
    finishedAt: new Date("2021-01-7-15:40"),
    tasksGiven: 10,
    tasksFinished: 9,
    topic: "JavaScript",
  },
  {
    startedAt: new Date("2021-01-7-16:00"),
    finishedAt: new Date("2021-01-7-19:20"),
    tasksGiven: 12,
    tasksFinished: 4,
    topic: "JavaScript",
  },
  {
    startedAt: new Date("2021-01-7-15:20"),
    finishedAt: new Date("2021-01-7-20:30"),
    tasksGiven: 16,
    tasksFinished: 13,
    topic: "GitHub",
  },
];
function timeSpent(end, start) {
  const total = end - start;
  return Math.floor(total * 2.77777778 * 10 ** -7);
}
for (let i = 1; i < mainTable.length; i++) {
  mainTable[i].totalTime = timeSpent(
    mainTable[i].finishedAt,
    mainTable[i].startedAt
  );
  mainTable[i].tasksFinishedPrecent = Math.floor(
    (mainTable[i].tasksFinished / mainTable[i].tasksGiven) * 100
  );
}

const body = document.getElementsByTagName("body")[0];
const tbl = document.createElement("table");
const tblBody = document.createElement("tbody");
const headOfColumns = [
  "Started time",
  "Finished time",
  "Tasks given",
  "Tasks finished",
  "Topic",
  "Total time",
  "Tasks completed percentage (%)",
];

function addCell(type, value, row, prop = null) {
  const cell = document.createElement(type);
  const cellText = document.createTextNode(value);
  if (type === "td") {
    cell.setAttribute("class", `${prop}`);
  }
  cell.appendChild(cellText);
  row.appendChild(cell);
}
for (let i = 0; i <= 11; i++) {
  // creates a table row
  let row = document.createElement("tr");
  //creates the heads of the table
  if (i === 0) {
    for (let j = 0; j < 7; j++) {
      addCell("th", headOfColumns[j], row);
    }
  }
  for (let prop in mainTable[i]) {
    //put in the td the data and assigning classes
    let textNode;
    if (prop === "startedAt" || prop === "finishedAt") {
      textNode = `${mainTable[i][prop].getHours()}:${mainTable[i][prop].getMinutes()}`;
    } else {
      textNode = mainTable[i][prop];
    }
    addCell("td", textNode, row, prop);
  }
  tblBody.appendChild(row);
}
tbl.appendChild(tblBody);
body.appendChild(tbl);

const column5 = document.getElementsByClassName("totalTime");
for (let i = 0; i < 10; i++) {
  if (column5[i].innerHTML >= 6) {
    column5[i].style.backgroundColor = "red";
  } else if (column5[i].innerHTML > 3 && column5[i].innerHTML < 6) {
    column5[i].style.backgroundColor = "darkorange";
  } else if (column5[i].innerHTML <= 3) {
    column5[i].style.backgroundColor = "lime";
  }
}

const column6 = document.getElementsByClassName("tasksFinishedPrecent");
for (let i = 0; i < 10; i++) {
  if (column6[i].innerHTML >= 80) {
    column6[i].style.backgroundColor = "Chocolate";
  } else if (column6[i].innerHTML > 60 && column6[i].innerHTML < 80) {
    column6[i].style.backgroundColor = "BurlyWood";
  } else if (column6[i].innerHTML <= 60) {
    column6[i].style.backgroundColor = "Bisque";
  }
}
