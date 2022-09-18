// Moment jquery
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

// Click on Save Button
let saveBtn = $('.saveBtn');
let inputNote = "";
let inputTime = "";

saveBtn.on('click', function(event) {
    event.preventDefault();
    inputTime = parseInt($(this).parent().attr("id"));
    inputNote = $(this).siblings(".description").val();
    console.log(inputTime);
    console.log(inputNote);
    saveInput();
})

// Function reset hour
var interval = setInterval(updateTime, 60000);

// Function to determine time blocks color

var timeBlock = Array.from(document.querySelectorAll(".time-block"));
console.log(timeBlock);
function updateTime() {
    var currentHour = moment().hours();
    console.log(currentHour);
        for (var i = 0; i < timeBlock.length; i++) {
            var blockHour = timeBlock[i];
            if (blockHour === currentHour) {
                blockHour.classList.add("present");
            } else if (blockHour < currentHour) {
                blockHour.classList.add("past");
            } else if (blockHour > currentHour) {
                blockHour.classList.add("future");
            } else {
                console.log("Enjoy your time off!")
            }
        } console.log(blockHour);
    }
updateTime(); 

// Save input data
function saveInput() {
    localStorage.setItem(inputTime, inputNote);
}

// Get input data
var timeBlockArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function getInput() {
    for ( var i = 0; i < timeBlockArr.length; i++) {
        $("[id^=timeblock-]").each(function (i, v) {
            $(v).val(localStorage.getItem(timeBlockArr[i]));
        }) 
    }
    console.log($(v).val);
};
getInput();

