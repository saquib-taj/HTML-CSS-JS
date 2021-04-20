console.log("Hello");
console.log("Hello");

// alert("Yooo");

// Variables

var b = "Smooth";
console.log(b);

var x = 45;
console.log(x);

/* var age = prompt("What is ur age??");

document.getElementById("demo").innerHTML = age; */

// Numbers 

var num1 = 10;
num1 += 10;
console.log(num1);

console.log(num1 % 7);

console.log(num1 / 8);

/* Functions
1. Create a fn.
2. Call a fn.  */

//Create
function fun() {
    console.log("This is a fn.")
}

// Call
fun();

function greet(yname) {
    var result = "Hello " + yname; // String Concatenation
    console.log(result);
}

//var name = prompt("what is ur n name?");
 //greet(name);

function sum(a, c) {
    var result = a + c;
    console.log(result);
}

sum(3, 8);

// while loop

var  num = 0;

while(num < 10) {
    num += 1;
    console.log(num);
}


// For loop
for(let num = 0; num < 10; num += 2) {
    console.log(num);
}

//Strings
let fruit = "banana, apple, kiwi" ;
let moreFruits = "banana\napple\nkiwi";   //new line
console.log(moreFruits);

console.log(fruit.length);
console.log(fruit.indexOf("nan"));
console.log(fruit.slice(2, 6));
console.log(fruit.replace("ban", "123"));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(3));
console.log(fruit[3]);
console.log(fruit.split(","));  //split by word
console.log(fruit.split(""));  // split by characters

// Arrays
let fru = ['banana', 'apple', 'orange'];
fru = new Array('banana', 'apple', 'orange');

console.log(fru[2]);
fru[0] = 'pear';
console.log(fru[0]);

for(let i = 0; i < fru.length; i++){
    console.log(fru[i]);
}

console.log('toString\n', fru.toString());
console.log(fru.join('*'));
//console.log(fru, fru.pop(), fru);  //remove last item
//console.log(fru.pop(), fru);       //remove last item 
console.log(fru.push('blackberry'), fru);  //appends last item
console.log(fru[3]);     
fru[fru.length] = 'new';       //same as push
console.log(fru);

fru.shift();   //remove 1st element
console.log(fru);

fru.unshift('kiwi');    //add 1st element
console.log(fru);

let veg = ['asparagus', 'tomato', 'potato'];

let all = fru.concat(veg);
console.log(all);

console.log(all.reverse());
console.log(all.slice(1,5));  //5 not included

console.log(all.sort());

let nos = [2, 45, 78, 577, 89, 43, 876, 453];
console.log(nos.sort(function(a, b) {return a-b}));   //ascending
console.log(nos.sort(function(a, b) {return b-a}));   //descending

let empty = new Array();
for(let num = 0; num < 10; num++){
    empty.push(num);
}
console.log(empty);

// Objects in Js

let student = {
    fn : 'Saquib',
    ln : 'Taj',
    age : 18,
    height : 177,
    info : function() {
        return this.fn + " " + this.ln + " is " + this.age;
    }
};

console.log(student.fn);
//student.fn = 'notSaquib';    //change value
console.log(student.fn);

console.log(student.info());


//Conditionals

/*var age = prompt("What is ur age?");

if((age >= 18) && (age <=35)) {
    sta = 'target';
} else {
    sta = 'waste';
}
console.log(sta);
*/


// Switch
switch(1) {
    case 5:
        day = "friday";
        break;
    case 6:
        day = "saturday";
        break;
    case 7:
        day = "sunday";
        break;
    default :
        day ="weekday";
}

console.log(day);



 
