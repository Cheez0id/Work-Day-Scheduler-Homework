var dayToday = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(dayToday);

var clearButton = document.querySelector(".clear");

// TODO: make a grid with 24 hours and three columns: ["time", "textcontent", "clearbutton"]
// TODO: use some function to create that grid so that it's filled in with arrays- RESEARCH and STUDY

clearButton.addEventListener ("click", function() { 
    // TODO: make this function 'clear' the content of the associated row of the second column in the grid
    console.log ("thistext");
}
)

var toDo = document.getElementById('1AM');
var myText = document.getElementById('theDiv');

//TODO: make taskinput be what the user writes in
toDo.addEventListener('click', function(){
  var taskInput = 'Hello World !';
td.1AM = taskInput;
});


//   // Creates element based on tag entered by user
//   var toDo = document.createElement(taskInput);

//   function addTask() = 

//   // Adds text content to created tag
//   tag.textContent = "input from user";
  
//   // Appends tag as child of document body
//   document.body.appendChild(toDo);
// }