const table1 = document.getElementById("table1");
let canvas = document.createElement("canvas");

table1.parentNode.insertBefore(canvas, table1);

let years1 = [];
let country1 = [];
let offenses =[];

let rows1 = table1.rows[1];

for (let i = 2 ; i < rows1.cells.length ; i++) {
    years1.push(rows1.cells[i].textContent);
}

for (let i = 2 ; i < table1.rows.length ; i++) {
    let row = table1.rows[i];
    country1.push(row.cells[1].textContent);
}


new Chart(canvas, {
    type: 'line',
    data: {
      labels: years1,
      datasets: [{
        label: country1,
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