let arr = '0 0 0 0 1 0';
let countJumps = 0;
arr = arr.split(' ').join(''); // выдираю из массива пробелы. Как я понял в задаче есть пробелы и они не нужны.
arr.split('').forEach((number, index) => {
do {
    countJumps++; // сразу делаю первый прыжок и смотрю куда, тк судя по логике задачи он всегда будет.
    number = (index +2) == 0 ? index +2 : index +1; // если я смогу прыгнуть через одно значение - прыгаю, иначе прыгаю на следущее.
}
while (index < index.lenght - 1); // проверка, чтобы я не выпрыгнул из.
});
 console.log(`Minimal amount of jumps = ${countJumps}`);
