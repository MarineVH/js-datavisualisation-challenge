let table1 = document.getElementById("table1");
let offences = table1.getElementsByTagName("td");

let table2 = document.getElementById("table2");
let prisonpopulation = table2.getElementsByTagName("td");

const canvas = document.createElement("canvas");

table1.parentNode.insertBefore(canvas, table1);

new Chart(canvas, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});