function buildPage() {
    var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    var timeBlock = $("#time-block-container");
    for (i = 0; i < hours.length; i++) {
        console.log("--- loop starting---");
        console.log(hours[i]);
        var hour = hours[i];
        var text = localStorage.getItem(hours[i]) || "";
        var newRow = createRow(hour, text);
        timeBlock.append(newRow);
    };

};

function saveNote() {
    var key = $(this).attr("data-time");
    var text = $("#input-" + this.id).val();
    localStorage.setItem(key, text);
};

function createRow(currentHour, text) { //
    console.log("creating---a---new---row");
    
    var parentDiv = $("<div>");
    parentDiv.addClass("row");

    var div1 = $("<div>");
    div1.addClass("col-md-1 hour time-block");
    div1.text(currentHour);

    var button = $("<button>");
    button.addClass("col-md-1 saveBtn");
    button.text("save");
    button.attr("id", currentHour);
    button.attr("data-time", currentHour)
    button.on("click", saveNote)

    var input = $("<input>");
    input.addClass("col-md-10");
    input.attr("id", "input-" + currentHour);
    input.val(text);
    parentDiv.append(div1);
    parentDiv.append(input);
    parentDiv.append(button);

    return parentDiv;
};

$(document).ready(function () {
    buildPage()


    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    //console.log(new Date());






});