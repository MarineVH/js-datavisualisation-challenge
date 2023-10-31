let table1 = document.getElementById("table1").innerHTML;
let offences = table1.getElementsByTagName("td").innerHTML;

let table2 = document.getElementById("table2").innerHTML;
let prisonpopulation = table2.getElementsByTagName("td").innerHTML;

const tables = document.querySelectorAll("table");

tables.forEach((table, index) => {
    const canvas = document.createElement("canvas");
    canvas.id = "chart${index}";
    canvas.width = 400;
    canvas.height = 200;

    table.parentNode.insertBefore(canvas, table);

    const labels = [];
    const data = [];
    const rows = table.querySelectorAll("tr");

    rows.forEach((row, rowIndex) => {
        if (rowIndex === 0) {
            return;
        }

        const cells = row.querySelectorAll("td");
        labels.push(cells[0].textContent);
        data.push(Number(cells[1].textContent));
    });

    new Chart(canvas, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Line Chart'
                }
            }
        },
    });
})