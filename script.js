"use strict";
const mainTable = [
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
    totalTime: function () {
      let timeSpent = this.finishedAt - this.startedAt;
      timeSpent = Math.floor(timeSpent * 2.77777778 * 10 ** -7);
      return timeSpent;
    },
    tasksFinishedPrecent: function () {
      return Math.floor((this.tasksFinished / this.tasksGiven) * 100);
    },
  },
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
    totalTime: function () {
      let timeSpent = this.finishedAt - this.startedAt;
      timeSpent = Math.floor(timeSpent * 2.77777778 * 10 ** -7);
      return timeSpent;
    },
    tasksFinishedPrecent: function () {
      return Math.floor((this.tasksFinished / this.tasksGiven) * 100);
    },
  },
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
    totalTime: function () {
      let timeSpent = this.finishedAt - this.startedAt;
      timeSpent = Math.floor(timeSpent * 2.77777778 * 10 ** -7);
      return timeSpent;
    },
    tasksFinishedPrecent: function () {
      return Math.floor((this.tasksFinished / this.tasksGiven) * 100);
    },
  },
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
    totalTime: function () {
      let timeSpent = this.finishedAt - this.startedAt;
      timeSpent = Math.floor(timeSpent * 2.77777778 * 10 ** -7);
      return timeSpent;
    },
    tasksFinishedPrecent: function () {
      return Math.floor((this.tasksFinished / this.tasksGiven) * 100);
    },
  },
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
    totalTime: function () {
      let timeSpent = this.finishedAt - this.startedAt;
      timeSpent = Math.floor(timeSpent * 2.77777778 * 10 ** -7);
      return timeSpent;
    },
    tasksFinishedPrecent: function () {
      return Math.floor((this.tasksFinished / this.tasksGiven) * 100);
    },
  },
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
    totalTime: function () {
      let timeSpent = this.finishedAt - this.startedAt;
      timeSpent = Math.floor(timeSpent * 2.77777778 * 10 ** -7);
      return timeSpent;
    },
    tasksFinishedPrecent: function () {
      return Math.floor((this.tasksFinished / this.tasksGiven) * 100);
    },
  },
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
    totalTime: function () {
      let timeSpent = this.finishedAt - this.startedAt;
      timeSpent = Math.floor(timeSpent * 2.77777778 * 10 ** -7);
      return timeSpent;
    },
    tasksFinishedPrecent: function () {
      return Math.floor((this.tasksFinished / this.tasksGiven) * 100);
    },
  },
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
    totalTime: function () {
      let timeSpent = this.finishedAt - this.startedAt;
      timeSpent = Math.floor(timeSpent * 2.77777778 * 10 ** -7);
      return timeSpent;
    },
    tasksFinishedPrecent: function () {
      return Math.floor((this.tasksFinished / this.tasksGiven) * 100);
    },
  },
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
    totalTime: function () {
      let timeSpent = this.finishedAt - this.startedAt;
      timeSpent = Math.floor(timeSpent * 2.77777778 * 10 ** -7);
      return timeSpent;
    },
    tasksFinishedPrecent: function () {
      return Math.floor((this.tasksFinished / this.tasksGiven) * 100);
    },
  },
  {
    startedAt: new Date("2021-01-7-15:00"),
    finishedAt: new Date("2021-01-7-17:00"),
    tasksGiven: 8,
    tasksFinished: 6,
    topic: "html",
    totalTime: function () {
      let timeSpent = this.finishedAt - this.startedAt;
      timeSpent = Math.floor(timeSpent * 2.77777778 * 10 ** -7);
      return timeSpent;
    },
    tasksFinishedPrecent: function () {
      return Math.floor((this.tasksFinished / this.tasksGiven) * 100);
    },
  },
];
var body = document.getElementsByTagName("body")[0];
let tbl = document.createElement("table");
let tblBody = document.createElement("tbody");

for (var i = 0; i <= 10; i++) {
  // creates a table row
  var row = document.createElement("tr");

  for (var j = 0; j <= 7; j++) {
    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    var cell = document.createElement("td");
    var cellText = document.createTextNode(
      "cell in row " + i + ", column " + j
    );
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  tblBody.appendChild(row);
}
tbl.appendChild(tblBody);
// appends <table> into <body>
body.appendChild(tbl);
// sets the border attribute of tbl to 2;
tbl.setAttribute("border", "2");
