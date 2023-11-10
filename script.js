// chart table1

var parentElement = document.getElementById('mw-content-text');
const table1 = document.getElementById("table1");
let canvas = document.createElement("canvas");
canvas.id = "canvas1";
table1.parentNode.insertBefore(canvas, table1);

const row1 = document.querySelector('#table1 tbody tr:first-child'); 

const years = [];
for (let i = 0; i < row1.children.length; i++) {
  const cell = row1.children[i];
  const cellContent = cell.innerHTML.trim();
  const year = parseInt(cellContent);
  if (!isNaN(year)) {
    years.push(year);
  }
}

const countryElements = document.querySelectorAll('#table1 tbody tr:not(:first-child) td:first-of-type');

const countries = Array.from(countryElements).map(td => td.textContent.trim());

const dataRows = document.querySelectorAll('#table1 tbody tr td:not(:nth-child(2))');

const data = Array.from(dataRows).map(td => td.textContent.trim());

const restructuredData = [];
const numOfYears = years.length;

for (let i = 0; i < data.length; i += numOfYears) {
  const countryData = data.slice(i, i + numOfYears);
  restructuredData.push(countryData);
}

const chartData = [];

for (let j = 0; j < countries.length; j++) {
    const country = countries[j];
    const dataValues = restructuredData[j];
    const obj = {
        country: country,
        data: dataValues,
    };
    chartData.push(obj);
}

const countryLabels = chartData.map(item => item.country);
const yearLabels = years;

const datasets = chartData.map(item => {
    return {
        label: item.country,
        data: item.data.map(value => parseFloat(value.replace(',', '.'))),
        tension: 0.1
    };
});

const ctx = document.getElementById('canvas1').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
      labels: yearLabels,
      datasets: datasets,
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

var parentElement = document.getElementById('mw-content-text');
const table2 = document.getElementById("table2");
let newCanvas = document.createElement("canvas");
newCanvas.id = "canvas2";
table2.parentNode.insertBefore(newCanvas, table2);

const tableData = [];

for (let i = 1; i < table2.rows.length; i++) {
  const rowData = table2.rows[i].cells;
  const dataObj = {
      "N°": rowData[0].innerText.trim(),
      "Country": rowData[1].innerText.trim(),
      "2007-09": rowData[2].innerText.trim(),
      "2010-12": rowData[3].innerText.trim()
  };
  tableData.push(dataObj);
}

const countryLabels2 = tableData.map((data) => data.Country);
const values2007_09 = tableData.map((data) => data["2007-09"]);
const values2010_12 = tableData.map((data) => data["2010-12"]);

const ctx2 = document.getElementById("canvas2").getContext('2d');

new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: countryLabels2,
    datasets: [{
      label: "2007_09",
      data: values2007_09,
      borderWidth: 1
    },
    {
      label: "2010-12",
      data: values2010_12,
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

var parentElement2 = document.getElementById('bodyContent');

var canvas3 = document.createElement('canvas');
canvas3.id = 'myChart3';
var tableAPI = document.getElementById('mw-content-text');

parentElement2.insertBefore(canvas3, tableAPI);

var dataPoints = [];
var totalDataPointsCount = 0;
var currentIndex = 0;

function updateChart() {
  var refresh = new XMLHttpRequest();
  var timestamp = new Date().getTime();
  refresh.open('GET', 'https://canvasjs.com/services/data/datapoints.php?timestamp=' + timestamp, true);
  refresh.onload = function () {
    if (refresh.status >= 200 && refresh.status < 300) {
      var newData = JSON.parse(refresh.responseText);

      dataPoints.push(newData[currentIndex]);

      myChart3.data.labels = dataPoints.map((point, index) => index);
      
      myChart3.data.datasets[0].data = dataPoints.map((point) => point[1]);

      myChart3.update();

      currentIndex = (currentIndex + 1) % newData.length;
    } else {
      console.error('Request failed with status', refresh.status);
    }
  };
  refresh.onerror = function () {
    console.error('Request failed');
  };
  refresh.send();
}

updateChart();

setInterval(function () {
  updateChart();
}, 1000);

var ctx3 = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(ctx3, {
  type: 'line',
  data: {
    labels: [],
    datasets: [
      {
        label: 'Chart with API from https://canvasjs.com/services/data/datapoints.php',
        data: [],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});