let table1 = document.getElementById("table1").innerHTML;
let offences = table1.getElementsByTagName("td").innerHTML;

let table2 = document.getElementById("table2").innerHTML;
let prisonpopulation = table2.getElementsByTagName("td").innerHTML;

const tables = document.querySelectorAll("table");

const canvas = document.createElement("canvas");
canvas.id = "chart${index}";
canvas.width = 400;
canvas.height = 200;


table1.parentNode.insertBefore(canvas, table1);