var hour9Am = $("#9");
var hour10Am = $("#10");
var hour11Am = $("#11");
var hour12Pm = $("#12");
var hour1Pm = $("#13");
var hour2Pm = $("#14");
var hour3Pm = $("#15");
var hour4Pm = $("#16");
var hour5Pm = $("#17");
var time = moment();

function setPlanner() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

setPlanner();
var saveBttn = $(".saveBtn");

saveBttn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
    console.log(time, schedule);
});

function pastPresentFuture() {
    hour = time.hours();
    // if you want to test the function if its running outside of time frame (9-5)
    //just add -5/-10 like this:
    // hour =  time.hours() -5 or -10; 
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

pastPresentFuture();
