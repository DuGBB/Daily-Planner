//import { mdiContentSaveOutline } from '@mdi/js';
var tableList = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"

];


function timeContainer() {
currentDay();
var timeContainer = document.getElementById("timeBox");
var createTable = document.createElement("table");
for (let index = 0; index < tableList.length; index++) {
    const element = tableList[index];
    var createRow = document.createElement("tr");
    //createRow.setAttribute("class", "row");
    var cellOne = document.createElement("td");
    cellOne.setAttribute("class", "hour");
    cellOne.innerHTML = element;
    var cellTwo = document.createElement("td");
    var cellText = document.createElement("textarea");
    //cellText.setAttribute("class", "description");
    cellTwo.appendChild(cellText);
    cellTwo.setAttribute("class", "past");
    var cellThree = document.createElement("td");
    cellThree.setAttribute("class", "saveBtn");
    //cellThree.innerHtml = "";
     var cellSave = document.createElement("input");
     cellSave.setAttribute("type", "image");
     cellSave.setAttribute("src", "/assets/images/1x/outline_save_black_24dp.png");
     cellSave.setAttribute("id", "save" + index);
     cellSave.setAttribute("name", "save" + index);
    // cellSave.setAttribute("class", "saveBtn");
//     cellSave.innerHTML = mdiContentSaveOutline; 
    cellThree.appendChild(cellSave);
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