// This is the current day at the top of the page.
var dayToday = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(dayToday);


//This is the variable to make the clear button work later
var clearButton = document.getElementById("timeBody").querySelectorAll(".clear");
console.log (clearButton;)

clearButton.addEventListener ("click", function() { 
    // TODO: make this function 'clear' the content of the associated row of the second column in the grid
    console.log ("thistext");
}
)

var times = ["1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM", "12AM"];
console.log (times.length);

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