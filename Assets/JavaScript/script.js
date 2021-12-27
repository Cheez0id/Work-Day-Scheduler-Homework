// This is the current day at the top of the page.
var dayToday = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(dayToday);

// variables selecting all of the elements .task and all elements .clear
var tasks = document.getElementById("timeBody").querySelectorAll(".task"); 
var clearButton = document.getElementById("timeBody").querySelectorAll(".clear"); 
var saveButton = document.getElementById("timeBody").querySelectorAll(".save"); 

// //Method(function) for making all .task elements DO something
// document.querySelectorAll('.task').forEach(tasks => {
//   tasks.addEventListener('click', event => 
//   //TODO: THE BELOW FUNCTION WILL OPEN EDITABLE TEXT AREA ONCLICK
//   {createInputField(), console.log (event.target), createSaveButton()
//   })
// })



//Method(function) for making all Clear buttons DO something
document.querySelectorAll('.clear').forEach(clearButton => {
  clearButton.addEventListener('click', event => 
  //TODO: THE BELOW FUNCTION WILL CLEAR OUT CONTENT OF block area FOR THE APPROPRIATE ROW ONCLICK --- below is my starting to attempt and make clear button clear tasks block content; I am not sure how to achieve this without writing 24 functions - not sure how to link 
  {console.log (event.target); 
  } 
  )
})

$(".save").click(function(event){
console.log ($(this).parent().siblings(".task").children("textarea").val()); 
console.log ($(this).parent().siblings("th").text()); 
    localStorage.setItem($(this).parent().siblings("th").text(), $(this).parent().siblings(".task").children("textarea").val())
}
  )


//TODO: add feature showing past/present/future color coded
//TODO: connect calendar
$( function() {
  $( "#datepicker" ).datepicker();
} );


//This is for the current time (does not update live)
var time = moment().format("HH");
$("#currentTime").text(time);




//NEED if statement for each of the time slots? NEED else statement that works for times

// if (time == "2PM") {console.log ("IT's LUNCHTIME"), timeGreen()} 
// else {timeGrey()}

//If the row id == the current time, then change the class; 
//TODO ADD NUMBERS AND REMOVE PAST IN HTML
for (var i = 1; i <= 24; i++) {
  console.log($("." + i).attr("class"))
  
  if (parseInt($("." + i).attr("class")) == time){
    $("." + i).addClass("present") 
  }
  if (parseInt($("." + i).attr("class")) < time){
    $("." + i).addClass("past") 
  }
  if (parseInt($("." + i).attr("class")) > time){
    $("." + i).addClass("future") 
  }
}


function changeColor(){
if (time == 345) {
  this.getAttribute()
  this.setAttribute("class", "future"); console.log ("present");}
} 

// changeColor();
//       //  else
//       //    this.setAttribute("class", "future") console.log ("future")}this.setAttribute("class", "present");

    



// // TODO: variables for some reason
// var oneAM = "#1AM";
// var twoAM = "#2AM";

// // function timeGreen(){
// //   var element = document.getElementById("12PM");
// //   element.style.backgroundColor = "#00FF00";
// // }

// // function timeGrey(){
// //   var element = document.getElementById("1AM");
// //   element.style.backgroundColor = "#D3D3D3"; console.log ("it is not lunchtime")