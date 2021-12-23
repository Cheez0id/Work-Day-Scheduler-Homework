# Work-Day-Scheduler-Homework

Using the pseudocode provided, I will plan steps to achieve a complete iteration of the expected criteria. [remember that you have so many resources for all of this, not just the activities!]  Refer to the pseudocode from Jung down below acceptance criteria.
 1. DONE - Use provided started code and basic frameworks (html, css, js, etc)- DONE
 2. Add today's date to the top of the page with moment.js - Done
 3. Add a Dynamic calendar with columns and rows that uses data from moment.js to color code Past/Present/And future rows in real time.
    a. First find a pre-made 'table' that will lend itself to our needs, probably Bootstrap? Something as clean and simple-looking a possible. Remember, if it's bootstrap it shoud be based on a 12x12 grid
    b. Add dynamic elements to pull information from moment.js and add to/pull from local storage.
        - times/dates displayed; 
        - Input fields for free text and dropdowns with pre-determined text?
        - buttons for add/subtract

 4. Local Storage 
    a. I need to review the material for this, but I think that I will be writing a function that takes input from the user in a form on the calendar/table, that will be an array of keys/value and STORED in local storage (??where IS that?  I mean, it seems like it's just bulit into the Browser API?? Do I have to make something for this or does local storage just exist and 'just work'??)




## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar 

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```


----------------------------
Homework 5 Pseudocode (from Instructor Jung)
<!-- Adding my own responses/notes in comments -->
1.  let's make a daily planner
    1a) Bootstrap?  <!-- Yes -->
    1b) Write all of it from scratch using CSS?
    1c) Do you want to use Google Fonts?
    1d) Do you want to use jquery? <!-- Yes -->
    1e) How close are you going to follow the demo?

2.  It kept track of the current time.
    2a) We have color-coded blocks based on the time represented as either past, present, or future.
    <!-- ??Grab a form from bootstrap?? a widget from jQuery UI?? -->
    => We need to learn a library to figure out how to keep track of time.
    <!-- used moment.js to put today's date/time at the top of the page; 
    ?? Can I use the same function in the rest of the script??-->

3.  How do I make forms/buttons/where you can type in text/input and then click/submit the button to save info to local storage
    3a) How do I make a single function that would DELEGATE the events to it's SIBLING ELEMENTS. (making a button that will delegate its functionality to all of its child or sibling elements is important) 
<!-- Yes it will be important and will be my first time working with this for something to submit; ??LOOK AT UNIT 5 ACTIVITIES 5-6?? MAYBE 7-10?? -->

    3b) How do I grab the value off of an input form?
    .val(); or .value
    I would console.log to make sure I'm grabbing the proper value.

    3c) localStorage.setItem(key, value);
<!-- Saving to local storage will involve a key and a value; REFER TO UNIT 4 WEB APIS ACTIVITIES21-26 -->
4.  How do I retrieve information from local Storage and set the data to the page?
    4a) I want to GET the item from local storage (localStorage.getItem(KEY));
    4b) .text(), .innerHtml, .textCenter, .val()

5.  HOW DO I MAKE THE COLOR FOR THE TIME BLOCKS
    13 time blocks
    => how are we going to separate out these time blocks? Via IDs? Via Classes? (ID MAYBE)
    for loop vs $.each("CLASS NAME"), then you do the logic below.
    5a) Some sort of class!
    5b) If(the current time > timeBlock) {
    .addClass("past");
    } else if(current time === timeBlock) {
    .removeClass('past');
    .addClass('present');
    } else {
    .removeClass('past');
    .removeClass('present');
    .addClass('future');
    }