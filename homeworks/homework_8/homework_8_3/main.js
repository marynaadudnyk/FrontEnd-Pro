/* Цикл на кожній ітерації пропонує через prompt ввести число більше 100(але максимум 10 ітерацій циклу).Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше.Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації, то функція виводить в консоль останній введення користувача і завершує функцію. */

function arr() {
    let min = 100;
    let maxCount = 10;
    let number;

    for (let i = 1; i <= maxCount; i++) {
        number = prompt(`Enter a number greater than 100:`);

        if (parseInt(number) > min || isNaN(number)) {
            break;
        }
    }

    console.log(number);
    return number;
}

arr();