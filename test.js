// Array

/*
const people = [
    {name: 'Andrew', budget: 1000},
    {name: 'Elena', budget: 800},
    {name: 'Sergey', budget: 600}
]

const allBudget = people
.filter(person => person.budget >700)
.reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)
console.log(allBudget)

*/


// setInterval ( () => {
//     console.log('After timeout')
// }, 1000)

// ----------------

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }
// 
// delay( () => {
//     console.log('After 2 seconds')
// }, 2000)

//-------------------

//Functions

function great(name) {
    console.log('Привет - ', name);
}

const arros = (name) => {
    console.log('Привет - ', name);
}

const arrow2 = name => console.log('Привет - ', name);
arrow2('Andrew');

//const pow2 = num => {
//    return num ** 2
//}
//identical to:
const pow2 = num => num ** 2

console.log(pow2(5));

// Parameters by default ---------------

const sum = (a, b) => {
    return a + b;
}

const add5 = sum.bind(null, 5);
const add5Manual = (b) => {
    return 5 + b;
};
console.log(add5(20)); // 25

//operator Rest

function sumAll(...all){
    let result = 0;
    for (let num of all){
        result += num;
    }
    return result; 
}
const res = sumAll(1, 2, 3, 4, 5, 6, 7);
console.log('sumAll = '+ res);



const delay = (wait = 1000) => {
    const promise =  new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve()
    }, wait)
})
return promise
}

delay (2500)
    .then( () => {
        console.log('After 2 seconds')
    })
    .catch( err => console.log(err))
    .finally( () => console.log('Finally'))

    
/*
const heading = document.getElementById('title')
//const headin2 = document.getElementsByTagName('h2')[0]
//const headin2 = document.getElementsByClassName('h2-class')[0]
const headin2 = document.querySelector('.h2-class')

console.log(headin2)
setTimeout( () => {

//console.dir(heading)
heading.textContent = 'Changed from Javascript'
heading.style.textAlign = 'center'
heading.style.backgroundColor = 'black'
heading.style.color = 'red'
heading.style.padding = '2rem'
}, 1500)

*/


//one variable == an array of objects
const people = [
    {name: 'Alexey', profession: 'dev-op eng'},
    {name: 'Andrew', colour: 'red'},
]

console.log(people[0].name);

//one variable == one object
let people2 = {name: 'Alexey', profession: 'dev-op eng'};
let people3 = {name:'Andrew', profession: 'pm'};

//an object where value == another object
const peopleDictionary = {
    Andrew: {name:'Andrew', profession: 'pm'},
    Alexey: {name: 'Alexey', profession: 'dev-op eng'},
};

console.log(people3.name);
console.log(people3['profession']);
console.log(peopleDictionary.Alexey.name);
