// This is the current day at the top of the page.
var dayToday = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(dayToday);


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

var times = document.getElementById("timeBody").querySelectorAll(".task"); 
console.log (times);
//Method(function) for making all Clear buttons DO something
document.querySelectorAll('.task').forEach(times => {
  times.addEventListener('click', event => 
  //TODO: THE BELOW FUNCTION WILL CLEAR OUT CONTENT OF COLUMN 2 FOR THE APPROPRIATE ROW ONCLICK
  {console.log ("listen!")
  })
})


// var times = ["1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM", "12AM"];
// console.log (times.length);

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