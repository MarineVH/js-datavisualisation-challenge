let table1 = document.getElementById("table1");
let offences = table1.querySelectorAll("tr");

let table2 = document.getElementById("table2");
let prisonpopulation = table2.querySelectorAll("tr");

const canvas1 = document.createElement("canvas");
const canvas2 = document.createElement("canvas");

table1.parentNode.insertBefore(canvas1, table1);
table2.parentNode.insertBefore(canvas2, table2);

const labels = [];
const data = [];

new Chart(canvas1, {
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

new Chart(canvas2, {
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