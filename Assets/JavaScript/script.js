// This is the current day at the top of the page.
var dayToday = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(dayToday);

// variables selecting all of the elements .task and all elements .clear
var tasks = document.getElementById("timeBody").querySelectorAll(".task"); 
var clearButton = document.getElementById("timeBody").querySelectorAll(".clear"); 
var saveButton = document.getElementById("timeBody").querySelectorAll(".save"); 


//Method(function) for making all Clear buttons DO something
document.querySelectorAll('.clear').forEach(clearButton => {
  clearButton.addEventListener('click', event => 
  //TODO: THE BELOW FUNCTION WILL CLEAR OUT CONTENT OF block area FOR THE APPROPRIATE ROW ONCLICK --- below is my starting to attempt and make clear button clear tasks block content; I am not sure how to achieve this without writing 24 functions - not sure how to link 
  {console.log (event.target); 
  } 
  )
})

//This is to save the input from the user in local storage
$(".save").click(function(event){
console.log ($(this).parent().siblings(".task").children("textarea").val()); 
console.log ($(this).parent().siblings("th").text()); 
    localStorage.setItem($(this).parent().siblings("th").text(), $(this).parent().siblings(".task").children("textarea").val())
}
  )


//TODO: connect calendar
$( function() {
  $( "#datepicker" ).datepicker();
} );


//for the current time (does not update live *sadface*)
var time = moment().format("HH");
$("#currentTime").text(time);


//For loop to change classes of the rows so that the colors change
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



// variables for some reason
// var oneAM = "#1AM";
// var twoAM = "#2AM";

//<End of Script>