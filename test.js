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
    country1.push(parseFloat(row.cells[1].textContent.replace(',', '.')));

    const dataCell = [];
    for(let y = 2; y < row.cells.length; y++) {
      dataCell.push(parseFloat(row.cells[y].textContent.replace(',', '.')));
    }
    offenses.push(dataCell);
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


const table2 = document.getElementById("table2");
let newCanvas = document.createElement("canvas");
table2.parentNode.insertBefore(newCanvas, table2);

let years2 = [];
let country2 = [];
let prisonPopulation = [];

let rows2 = table2.rows[0];

for (let i = 2 ; i < rows2.cells.length ; i++) {
  years2.push(rows2.cells[i].textContent);
}

for (let i = 1 ; i < table2.rows.length ; i++) {
  let row = table2.rows[i];
  country2.push(row.cells[1].textContent);
}

new Chart(newCanvas, {
  type: 'bar',
  data: {
    labels: country2,
    datasets: [{
      label: years2[0],
      data: prisonPopulation,
      borderWidth: 1
    },
    {
      label: years2[1],
      data: prisonPopulation,
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