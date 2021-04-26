var arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let sum = 0;
let result = {};
for (let i = 0; i < arr.length; ++i) {
    let a = arr[i];
    if (result[a] !== undefined)
        ++result[a];
    else
        result[a] = 1;
}
//проверяю сколько раз повторяются элементы в массиве
for (const key in result) {
    console.log('число ' + key + ' == ' + result[key] + ' раз');
}
// суммирую все элементы, деленные по модулю 2.
for (let dpmd in result) {
    sum += Math.floor(result[dpmd] / 2);
}
console.log(sum);
