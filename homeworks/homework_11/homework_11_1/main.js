// Вивести таблицю Піфагора(10×10), таблиця повинна бути створена динамічно
function tablePythagoras() {
    const table = document.createElement('table');
    const tableRow = document.createElement('tr');
    const tablEmpty = document.createElement("th");

    document.querySelector('.table-holder').appendChild(table);
    document.querySelector('table').appendChild(tableRow);
    tableRow.appendChild(tablEmpty);

    for (let i = 1; i <= 10; i++) {
        const th = document.createElement("th");
        th.textContent = i;
        tableRow.appendChild(th);
    }

    for (let i = 1; i <= 10; i++) {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        th.textContent = i;
        table.appendChild(tr);
        tr.appendChild(th);

        for (let j = 1; j <= 10; j++) {
            const td = document.createElement("td");
            td.textContent = i * j;
            tr.appendChild(td);
        }
    }
}

tablePythagoras();


