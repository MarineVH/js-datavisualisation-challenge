const table1 = document.getElementById("table1");
let canvas = document.createElement("canvas");

table1.parentNode.insertBefore(canvas, table1);

let years1 = [];
let country1 = [];
let offenses =[];



new Chart(canvas, {
    type: 'line',
    data: {
      labels: years,
      datasets: [{
        label: country,
        data: offenses,
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