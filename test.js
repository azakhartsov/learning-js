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

/*
setInterval ( () => {
    console.log('After timeout')
}, 1000)
*/

/*
const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait)
}

delay( () => {
    console.log('After 2 seconds')
}, 2000)
*/

/*
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
    */
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
