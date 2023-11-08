
const table1 = document.getElementById("table1");
let canvas = document.createElement("canvas");
canvas.id = "canvas1";

table1.parentNode.insertBefore(canvas, table1);

const row1 = table1.querySelectorAll("tr:first-child");

const years = [];

for (let i = 0; i < row1.child.length; i++) {
  const cell = row1.children[i];
  const cellContent = cell.innerHTML.trim();

  const year = parseInt(cellContent);
  if (!isNaN(year)) {
    years.push(year);
  }
}

console.log(years);

new Chart(canvas, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: '# of Votes',
        data: data,
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
newCanvas.id = "canvas2";

table2.parentNode.insertBefore(canvas2, table2);

const rows2 = table2.querySelectorAll("tr");

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