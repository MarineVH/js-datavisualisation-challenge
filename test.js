// chart table1

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
    country1.push(row.cells[1].innerText);

    for (let i = 1 ; i < table1.rows.length ; i++) {
      let row = table1.rows[i];
      offenses.push(parseFloat(row.cells[2].textContent.replace(",", ".")));
    }
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



// chart table2

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
  country2.push(row.cells[1].innerText);

  for (let i = 1 ; i < table2.rows.length ; i++) {
    let row = table2.rows[i];
    prisonPopulation.push(parseFloat(row.cells[2].textContent.replace(",", ".")));
  }
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



// ajax & json

var dataPoints = [];
$.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json", function(data) {  
    $.each(data, function(key, value){
        dataPoints.push({x: value[0], y: parseInt(value[1])});
    });
    chart = new CanvasJS.Chart("chartContainer",{
        title:{
            text:"Live Chart with dataPoints from External JSON"
        },
        data: [{
        type: "line",
        dataPoints : dataPoints,
        }]
    });
    chart.render();
    updateChart();
});

function updateChart() {
  $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=" + (dataPoints.length + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json", function(data) {
      $.each(data, function(key, value) {
          dataPoints.push({
              x: parseInt(value[0]),
              y: parseInt(value[1])
          });
     });
     chart.render();
     setTimeout(function(){updateChart()}, 1000);
  });
}