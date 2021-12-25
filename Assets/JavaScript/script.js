// This is the current day at the top of the page.
var dayToday = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(dayToday);

// This is the variable selecting all of the elements .task
var tasks = document.getElementById("timeBody").querySelectorAll(".task"); 
console.log (tasks);
//Method(function) for making all .task elements DO something
document.querySelectorAll('.task').forEach(tasks => {
  tasks.addEventListener('click', event => 
  //TODO: THE BELOW FUNCTION WILL OPEN EDITABLE TEXT AREA ONCLICK
  {console.log ("listen!"), tasks.textContent = "check it out!"
  })
})
console.log (tasks.length);

//This is the variable selecting all buttons with .clear
var clearButton = document.getElementById("timeBody").querySelectorAll(".clear"); 
console.log (clearButton);
//Method(function) for making all Clear buttons DO something
document.querySelectorAll('.clear').forEach(clearButton => {
  clearButton.addEventListener('click', event => 
  //TODO: THE BELOW FUNCTION WILL CLEAR OUT CONTENT OF COLUMN 2 FOR THE APPROPRIATE ROW ONCLICK
  {console.log ("hey!")
  })
})

var toDo = document.getElementById('1AM');
var myText = document.getElementById('theDiv');

//TODO: make taskinput be what the user writes in
toDo.addEventListener('click', function(){
  var taskInput = 'Hello World !';
});


//   // Creates element based on tag entered by user
//   var toDo = document.createElement(taskInput);

//   function addTask() = 

//   // Adds text content to created tag
//   tag.textContent = "input from user";
  
//   // Appends tag as child of document body
//   document.body.appendChild(toDo);
// }