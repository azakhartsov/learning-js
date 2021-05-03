const s = ['abcac'];
let n = 10;
let sum = 0;
let newarray = [];
while(n--){ 
    newarray = newarray.concat(s); 
}

newarray.forEach(element => {
    if (element == 'a') {
        sum++;
    }
});

console.log(sum);