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