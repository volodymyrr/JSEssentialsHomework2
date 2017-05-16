var euro = prompt("Input amount of euro: ");
var dollar = prompt("Input amount of dollars: ");
var dollar_course = 26.471947;
var euro_course = 29.045020;

var exchanged_euros = euro*euro_course;
var exchanged_dollars = dollar*dollar_course;
var euro_to_dollar_course = euro_course/dollar_course;

var calculated_courses = euro + " euros are equal "+(Math.round(exchanged_euros*1000)/1000)+ " grns, "+dollar + " dollars are equal "
+(Math.round(exchanged_dollars*1000)/1000)+" grns, one euro is equal " + (Math.round(euro_to_dollar_course*1000)/1000) +" dollars.";

alert(calculated_courses);