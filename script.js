let date=""
let age=""
function number() {
date=document.getElementById("date").value
age=document.getElementById("age").value
if((date=="Tuesday"||date=="Thursday")||(age>12 && age<21)){
  alert("you are eligible for student pricing!");
}else{
  alert("You have to paid the price")
}
}