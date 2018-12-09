// ©2018 Paul Fooks, Reading School for Year 7. 201812091048

function dateInsert() {
    // alert('dateInsert')

    // set d = to a date object
	var d = new Date();

	// ternary operator if < 10 then add 0 else display date
	var day = d.getDate() < 10?"0"+d.getDate():d.getDate();
	
	// set date_time to the day, hyphen month + 1, another hyphen and then full year
    var date_time = day + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
    
    // llo at document and get element id - "date_time". Change its innerHTML to var date_time
	document.getElementById("date_time").innerHTML = date_time;
}

window.onload = dateInsert;