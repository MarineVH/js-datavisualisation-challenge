let table1 = document.getElementById("table1").innerHTML;
let offences = table1.getElementsByTagName("td").innerHTML;

let table2 = document.getElementById("table2").innerHTML;
let prisonpopulation = table2.getElementsByTagName("td").innerHTML;

const canvascontainer = {
    <div class="canvas-container">
}

insertAdjacentHTML("afterend", table)

new Chart(table1, {
    type: 'bar',
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