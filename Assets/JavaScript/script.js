var dayToday = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(dayToday);

var clearButton = document.querySelector(".clear");

clearButton.addEventListener ("click", function() { console.log ("thistext");
}
)