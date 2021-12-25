// This is the current day at the top of the page.
var dayToday = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(dayToday);


//This is the variable selecting all buttons with .clear
var clearButton = document.getElementById("timeBody").querySelectorAll(".clear"); 
console.log (clearButton);

//this method will output 'thistext' when a selected button is clicked.  I WANT IT TO WORK FOR ALL OF THEM
clearButton[0].addEventListener ("click", function() { 
    // TODO: make this function 'clear' the content of the associated row of the second column in the grid
    console.log ("thistext"); 
}
)
clearButton[1].addEventListener ("click", function() { 
  // TODO: make this function 'clear' the content of the associated row of the second column in the grid
  console.log ("thistext"); 
}
)


//THE ABOVE WILL WORK PUTTING [ARRAYSELECTION 0-24 FOR ONE BUTTON] BUT IM TRYING TO MAKE A FOR LOOP SO THAT I SELECTS ALL OF THE BUTTONS WITH THE CLEAR CLASE TO MAKE THEM ALL WORK
// for (i=0, i <= clearButton.length, i++ ){}


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