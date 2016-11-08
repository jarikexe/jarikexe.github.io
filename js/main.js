//getting filds
var years = document.getElementById("years");
var months = document.getElementById("month");
var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var secounds = document.getElementById("seounds");

setInterval(function(){
//Calculating what time is left
var dateToReach = new Date(2016, 11, 24,  19, 00,00);
var now = new Date();

var culc = function(date1, date2){
  var msLeft = date2.getTime() - date1.getTime();
    return(msLeft);
};

var ONE_DAY = 1000 * 60 * 60 * 24;
var ONE_HOUR = 1000 * 60 * 60;
var ONE_MINUTE = 1000 * 60;

var currentMS = culc(now,dateToReach);
var daysLeft = Math.floor(currentMS/ONE_DAY);
var hoursLeft = Math.floor((currentMS - daysLeft *ONE_DAY)/ONE_HOUR);
var minLeft = Math.floor((currentMS - hoursLeft * ONE_HOUR-daysLeft *ONE_DAY)/ONE_MINUTE);
var secLeft = Math.floor((currentMS - hoursLeft * ONE_HOUR-daysLeft *ONE_DAY - minLeft*ONE_MINUTE)/1000);

//innering the result
  days.innerHTML = daysLeft;
  hours.innerHTML = hoursLeft;
  minutes.innerHTML = minLeft;
  secounds.innerHTML = secLeft;
}, 1000);
