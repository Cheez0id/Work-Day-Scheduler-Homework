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
  {createInputField()
  })
})

console.log (document.body.children[1].children[0].children.timeBody.children[0].children[1])

//trying to put the inputfield in the block area
function createInputField() {
  var inputField = document.createElement("INPUT");
  inputField.setAttribute("type", "text");
  console.log ("myfunction worked");
  document.body.children[1].children[0].children.timeBody.children[0].children[1].appendChild = inputField
}


//Method(function) for making all Clear buttons DO something
document.querySelectorAll('.clear').forEach(clearButton => {
  clearButton.addEventListener('click', event => 
  //TODO: THE BELOW FUNCTION WILL CLEAR OUT CONTENT OF COLUMN 2 FOR THE APPROPRIATE ROW ONCLICK --- below is my starting to attempt and make clear button clear tasks block content
  {console.log ("hey!") 
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