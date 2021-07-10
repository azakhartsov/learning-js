//nst name = 'Ray';
//t john = { name: 'John', greet: function(person) {
//    console.log("Hi " + person + ", my name is " + this.name);
//  }
//};
////john.greet("Mark");
//
//t fx = john.greet;
//("Mark");



function Person(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
  }
  Person.prototype = {
    getFullName: function() {
      console.log(this.first + ' ' + this.last);
    },
    greet: function(other) {
        console.log("Hi " + other.first + ", I'm " + this.first + ".");
    }
  };

var elodie = new Person('Elodie', 'Jaubert', 27);
var christophe = new Person('Christophe', 'Porteneuve', 30);
christophe.greet(elodie);

function times(n, fx, arg) {
    for (var index = 0; index < n; ++index) {
      fx(arg);
    }
  }times(3, christophe.greet, elodie);
  // => Three times "Hi Elodie, I'm undefined." 
  times(1, elodie.getFullName);
  // => "undefined undefined"

  


  //another explanation how bind works.
  
 // let c1 = {
 //     x: 5,
 //     y: 10
 // };

 // let c2 = {
 //     x: 75,
 //     y: 235
 // };

 // function printCoordinates() {
 //     console.log(this.x +', ' + this.y);
 // }

 // let c1_func = printCoordinates(c1);
 // let c2_func = printCoordinates.bind(c2);

 // c1_func();
 // c2_func();
