// Вивести таблицю Піфагора(10×10), таблиця повинна бути створена динамічно

function tablePythagoras() {
    const table = document.querySelector('.table-holder');
    const tableRow = document.querySelector('.row');
    const tableCol = document.querySelector('.col');

    let start = 1;
    let end = 10;

    for (let i = start; i <= end; index++) {
        const th = document.createElement('th');
        th.textContent = i;
        tableRow.appendChild('th');
    }
    table.appendChild(tableRow);
    wrapper.appendChild(table);
}

tablePythagoras();

// function createPythagorasTable() {
//     const tableContainer = document.querySelector('.table-holder');
//     const table = document.createElement('table');

//     // Створення заголовка таблиці
//     const headerRow = document.createElement("tr");
//     const emptyHeader = document.createElement("th");  // Порожній верхній лівий кут
//     headerRow.appendChild(emptyHeader);

//     // Додаємо числа від 1 до 10 в заголовок таблиці
//     for (let i = 1; i <= 10; i++) {
//         const th = document.createElement("th");
//         th.textContent = i;
//         headerRow.appendChild(th);
//     }
//     table.appendChild(headerRow);

//     // Створення рядків таблиці
//     for (let i = 1; i <= 10; i++) {
//         const row = document.createElement("tr");

//         // Створення першої комірки в кожному рядку (ліве число)
//         const th = document.createElement("th");
//         th.textContent = i;
//         row.appendChild(th);

//         // Створення таблиці множення для кожного числа
//         for (let j = 1; j <= 10; j++) {
//             const td = document.createElement("td");
//             td.textContent = i * j;
//             row.appendChild(td);
//         }

//         // Додаємо рядок в таблицю
//         table.appendChild(row);
//     }

//     // Додаємо таблицю до контейнера
//     tableContainer.appendChild(table);
// }

// // Викликаємо функцію для створення таблиці
// createPythagorasTable();

