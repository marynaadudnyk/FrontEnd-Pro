/* Дано масив з елементами різних типів.Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву. */

let arr = [300, '578', true, 'hi', -10, 36, 'hello', 389, null, 39, '40'];

function functionArr(arr) {
    let result = 0;
    let count = 0;
    let total;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            result = result + arr[i];
            count++;
        }
    }
    console.log(result / count);
}

functionArr(arr);