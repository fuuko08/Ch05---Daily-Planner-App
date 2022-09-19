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
    for (var i = 0; i < timeBlockArr.length; i++) {
        $("#timeblock-[i]").each(function (i, v) {
            $(v).val(localStorage.getItem(timeBlockArr[i]));
        })
    }
};
getData();

// Function reset hour
var interval = setInterval(updateTime, 60000);

// Function to determine time blocks color
var currentHour = moment().hours();
console.log(currentHour);

function updateTime() {
$(".row").each(function() {
    var timeBlock = parseInt($(this).attr("id"));
    if (timeBlock === currentHour) {
        $(this).addClass("present");
    } else if (timeBlock < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
    } else if (timeBlock > currentHour) {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    } else {
        console.log("Enjoy your time off!")
    }
})
}
updateTime();