/* Дізнатись суму всіх зарплат користувачів:
Об'єкт може містити невідому кількість департаментів та співробітників */

const company = {
    sales: [{ name: `Mark`, salery: 1500 }, { name: `Tom`, salery: 2000 }, { name: `Lena`, salery: 2500 }, { name: `Alex`, salery: 1200 }, { name: `Alica`, salery: 1000 }, { name: `Alik`, salery: 1350 }, { name: `Kate`, salery: 2300 }, { name: `Margo`, salery: 1700 }],
    development: [{ name: `Klar`, salery: 1590 }, { name: `Roman`, salery: 2500 }, { name: `Stive`, salery: 2580 }, { name: `Lera`, salery: 1200 }, { name: `Alica`, salery: 1000 }, { name: `Alik`, salery: 2350 }],
    manedger: [{ name: `Lara`, salery: 3500 }, { name: `Stive`, salery: 3040 }, { name: `Lena`, salery: 2970 }]
};

function totalSalary(obj) {
    let total = 0;

    for (let keys in company) {
        let people = company[keys];
        for (let i = 0; i < people.length; i++) {
            total += people[i].salery;
        }
    }
    console.log(total)
}

totalSalary(company);