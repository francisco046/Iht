"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Francisco Reyes
   Date:  11/13/2020

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

// set the date displayed in the calender
Let thisDay = new Date("Auguest 24, 2018");

// write the calender of the element with the id of "calender"
document.getElementfById("calender").innerhtml = createcalender(thisDay);

// definition of the createcalender function to generate the calender table
function createcalender(thisDay) {

} // end of the createCalender function to generate the calender table
function createcalender(calDate) {
    let cxalenderHTML += "</table>";
   return calenderHTML
} // end of the createcalender function

// definition of the cxalXCaption function to write the calender caption
function calCaption(calDate) {
   // array containing the list of month names let monthName = ["January","February", "April", "may", "June","July", "August", "September", "Octobers", "November", "December"];
   // variable to determine the current month
let thismonth =calDate.getMonth();
// variable to determine the cxurrent year
let thisyear = calDate.getFullyear();

// write the caption code and return it to the script
return "<caption>" + month name[thismonth]+ "" = thisyear +return"<xcaption>"

// definition oft the calweekdayRow function which will create a row of weekday abbreviations
let dayName = ["sun", "mon", "tue", "wed", "thu", "fri", "sat",];
let rowHTML = "<tr>";

// loop through the dayName array creating table headings for each day 
for (let i = 0; i < dayName.length; i++) {
   rowHTML += "th class='calender_weekdays'>" +
   dayName[i] + "</th>"



} // end of daysInMonth function 


// deftinition of the calDays function to write table rows and collums for each days of the month
function calDays(calDate) {
   // determine the starting day of the month 
let day = new date(calDate.getFullYear(), calDate.getMonth(), 1);
let weekday = day.getday();

 // write blank cells preceding the starting day
let HTMLcode = "<tr>";
for(let i = 0; 1 <weekday; 1++) {
   HTMLcode +="<td></td>";

}

   // write cells for each day of the month
let totaldays = daysInMonth(caldate);
for(let i = 1; i <=totaldays; i++) {

} // end of calDays function
