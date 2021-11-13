//var moment = require("moment");
var tableList = ["9am", "10a", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"

];


function timeContainer() {
currentDay();
var timeContainer = document.getElementById("timeBox");
//timeContainer.innerHTML = "BLAHBLAHBLAH";
//timeContainer.style.backgroundColor="red";
var createTable = document.createElement("table");
for (let index = 0; index < tableList.length; index++) {
    const element = tableList[index];
    var createRow = document.createElement("tr");
    var cellOne = document.createElement("td");
    cellOne.innerHTML = element;
    var cellTwo = document.createElement("td");
    var cellThree = document.createElement("td");
    createRow.appendChild(cellOne);
    createRow.appendChild(cellTwo);
    createRow.appendChild(cellThree);
    createTable.appendChild(createRow);
}
timeContainer.appendChild(createTable);
}

function currentDay() {
    var currentDay = document.getElementById("currentDay");
    var today = moment();
    var momentDisplay = moment(today).format("dddd, MMMM Do");
    currentDay.innerHTML = momentDisplay;
}


timeContainer();