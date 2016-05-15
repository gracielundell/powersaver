function Reminder() {
  var d = new Date();
  var n = d.getDay();
if (n = 1||2||3||4||5){
var h = new Date().getHours();
var w = 19-h
if (h>=13 && h<=19){
window.alert("You're paying triple the normal price for your electricity right now! Wait" + " "+ w + " " + "hours, and it will be cheaper, AND better for the environment!");
  } else {window.alert("Now's a great time to use electricity, for your wallet, and the planet!")}
  } else {window.alert("Weekends are the best times to use electricity, for your utility, the environment and your bank account!")}
}
