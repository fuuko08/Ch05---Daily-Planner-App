// Moment jquery
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

// Save input data
let saveBtn = $('.saveBtn');
let inputNote = "";
let inputTime = "";

saveBtn.on('click', function(event) {
    event.preventDefault();
    inputTime = $(this).attr("id");
    inputNote = $(this).siblings(".description").val();
    alert("Your task has been saved in local storage!")
    saveInput();
    
})

function saveInput() {
    localStorage.setItem(inputTime, inputNote);
}

// Get input data
var timeBlockArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function getData() {
    for (let i = 9; i < 17; i++) {
        $("#timeblock-[i]").each(function (i, v) {
            $(v).val(localStorage.getItem(timeBlockArr[i]));
        })
    }
};
getData();


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