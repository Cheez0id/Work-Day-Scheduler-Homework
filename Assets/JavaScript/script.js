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
  console.log ("myfunction worked");
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




//TODO: make taskinput be what the user writes in
// toDo.addEventListener('click', function(){
//   var taskInput = 'Hello World !';
// });


//   // Creates element based on tag entered by user
//   var toDo = document.createElement(taskInput);

//   function addTask() = 

//   // Adds text content to created tag
//   tag.textContent = "input from user";
  
//   // Appends tag as child of document body
//   document.body.appendChild(toDo);
// }