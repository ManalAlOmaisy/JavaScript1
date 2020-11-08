
/*var x = "Good Morning";
var y = { name: "Mike", age: 30};

console.log(typeof x, typeof y);


function compareTypes(x, y) {

if (typeof x == typeof y) 
{
console.log('same type');
} 
else 
{
console.log('not the same type');
}
}
console.log(compareTypes(x, y));*/


/*I didnt get the question well so i solved it as above but with a help of 
Atabek in the class he explained it more as below.*/

let x = "Good Morning";
let y = "Have a nice day";
let person = { name: "Mike", age: 30};
let logo = { name: "Marimba", color: "green"};

//to check the type
console.log(typeof x, typeof y);
console.log(typeof person, typeof logo);

//compare each data
function compareType(type1, type2) {
    if (typeof type1 === typeof type2) {
        console.log("SAME TYPE");
    } else {
        console.log("NOT THE SAME");
    }
}
console.log(compareType(x, y));
console.log(compareType(x, person));
console.log(compareType(person, logo));
console.log(compareType(y, person));
console.log(compareType(x, logo));
console.log(compareType(y, logo));
