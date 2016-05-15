function Reminder() {
var d = new Date();
var n = d.getDay();
if (n = 1||2||3||4||5){
var h = new Date().getHours();
var w = 19-h
if (h>=13 && h<19){
window.alert("You're paying over double the normal price for your electricity right now! Wait" + " "+ w + " " + "hour(s), and it will be cheaper, AND better for the environment!");
} else {window.alert("Now's a great time to use electricity, for your wallet, and the planet!")}
} else {window.alert("Weekends are the best times to use electricity, for your utility, the environment and your bank account!")}
}
function Savings() {
var d = new Date();
var n = d.getDay();
if (n = 1||2||3||4||5){
var h = new Date().getHours();
var w = 19-h
if (h>=13 && h<19){
window.alert("By waiting" + " "+ w + " " + "hour(s), you will save ~$1.70 drying a single load of laundry; in just one week of average use, that adds up to $15!  And that's just one appliance! Save money, save the planet!");
} else if (h>=19) {window.alert("Electricity's cheap right now, and it will be until tomorrow at 1 PM!")}
else if (h<13) {window.alert("Electricity's cheap right now, and it will be until 1 PM!")}
} else {window.alert("Electricity's cheap right now, and will be for the rest of the weekend!")}
}
