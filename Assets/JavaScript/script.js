// This is the current day at the top of the page.
var dayToday = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(dayToday);

// variables selecting all of the elements .task and all elements .clear
var tasks = document.getElementById("timeBody").querySelectorAll(".task"); 
console.log (tasks);
var clearButton = document.getElementById("timeBody").querySelectorAll(".clear"); 

//Method(function) for making all .task elements DO something
document.querySelectorAll('.task').forEach(tasks => {
  tasks.addEventListener('click', event => 
  //TODO: THE BELOW FUNCTION WILL OPEN EDITABLE TEXT AREA ONCLICK
  {createInputField(), console.log (event.target), createSaveButton()
  })
})

//function to create inputfield
function createInputField() {
  var inputField = document.createElement("INPUT");
  inputField.setAttribute("type", "text");
  inputField.setAttribute("value", "TODO Item");
  console.log ("input field created");
  //make an inputfield appear on click of target block area
  event.target.appendChild(inputField);
}

//function to create savebutton
//TODO: correct error where multiple fields are made; onclick? save input to local storage
function createSaveButton() {
  var saveButton = document.createElement("BUTTON");
  saveButton.innerHTML = "Save";
  console.log ("save button exists");
  //make an inputfield appear on click of target block area
  event.target.appendChild(saveButton);
}

//Method(function) for making all Clear buttons DO something
document.querySelectorAll('.clear').forEach(clearButton => {
  clearButton.addEventListener('click', event => 
  //TODO: THE BELOW FUNCTION WILL CLEAR OUT CONTENT OF block area FOR THE APPROPRIATE ROW ONCLICK --- below is my starting to attempt and make clear button clear tasks block content; I am not sure how to achieve this without writing 24 functions - not sure how to link 
  {console.log (event.target); 
  } 
  )
})


//TODO: add feature showing past/present/future color coded
//TODO: connect calendar
$( function() {
  $( "#datepicker" ).datepicker();
} );


//This is for the current time (does not update live)
var time = moment().format("hh:mm:ss");
$("#currentTime").text(time);

//NEED if statement for each of the time slots
// if time === "#1AM"

var oneAM = "#1AM";
var twoAM = "#2AM";

console.log (oneAM)