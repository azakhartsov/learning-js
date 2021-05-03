let arr = [0, 0, 0, 0, 1, 0];
let countJumps = 0;
let index = 0;
do {
    countJumps++; // сразу делаю первый прыжок и смотрю куда, тк судя по логике задачи он всегда будет.
    index = arr[index + 2] == 0 ? index + 2 : index + 1; //проверяю значение элемента черед один индекс. Если ноль, то прыгагаю на него, если нет, то прыгаю на следущий.
}
while (index < arr.length - 1); 
 console.log(`Minimal amount of jumps = ${countJumps}`);


// forEach - perform a function for every element
// map (a -> b) - perform a function for every element, returned result 
// filter - perform a function for every element, if returns true, this element will be added to the resulting array
// reduce - perform a function for every element and accumulator, return accumulator
// every - perform a function for every element, if returns true for every element, returns true 
// some - perform a function for every element, if returns true for any element, returns true
