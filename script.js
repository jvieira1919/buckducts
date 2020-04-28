function buildPage() {
    var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
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

function createRow(theRowHour, text) { //
    console.log("creating---a---new---row");

    var parentDiv = $("<div>");
    parentDiv.addClass("row");

    var div1 = $("<div>");
    div1.addClass("col-md-1 hour time-block");
  
    var theRowHour12 = ""

    if (theRowHour>12) {
        theRowHour12 = (theRowHour-12) + "pm";
    } else if (theRowHour === 12) {
        theRowHour12 = theRowHour+"pm";
    }   else {
        theRowHour12 = theRowHour+"am";
    }

    div1.text(theRowHour12);

    var button = $("<button>");
    button.addClass("col-md-1 saveBtn");
    button.text("save");
    button.attr("id", theRowHour);
    button.attr("data-time", theRowHour)
    button.on("click", saveNote)

    var input = $("<input>");
    input.addClass("col-md-10");
    var idVal = "input-" + theRowHour
    input.attr("id", idVal);
    console.log(theRowHour)
    input.val(text);

    var currentHour = (moment().format('H'));
    if (theRowHour == currentHour) {
        input.addClass("present")
    }
    else if (theRowHour < currentHour) {
        input.addClass("past")
    }
    else if (theRowHour > currentHour) {
        input.addClass("future")
    };

    parentDiv.append(div1);
    parentDiv.append(input);
    parentDiv.append(button);

    return parentDiv;
};

$(document).ready(function () {
    buildPage()


    
    //console.log(new Date());






});