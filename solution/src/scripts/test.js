var students = require('../JSON/studentsByAvailability.json');
var classes = require('../JSON/classes.json');
//console.log(JSON.stringify(students,undefined,2))


function test(){
    document.getElementById("user").innerHTML = JSON.stringify(students,undefined,2)
}