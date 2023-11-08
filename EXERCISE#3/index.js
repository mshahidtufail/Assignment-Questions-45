"use strict";
/*3-Name Cases: Store a person’s name in a variable, and
then print that person’s name in lowercase, uppercase, and titlecase.*/
//for lowercase
/*const personName="Shahid Tufail";
const lowercase=(personName.toLowerCase())
console.log(lowercase);

//for uppercase

const uppercase=(personName.toUpperCase());
console.log(uppercase);

// for titlecase
const name1="shahid tufail has good hight";
const newName = name1.split(" ").map((l: string) =>
 l[0].toUpperCase() + l.substr(1)).join(" ")

console.log(newName);*/
const personName = "Shahid Tufail";
console.log("lowercase:", personName.toLowerCase());
//for uppercase 
console.log("uppercase:", personName.toUpperCase());
// for titlecase
console.log("titlecase:", personName.split(" ").map((l) => l[0].toUpperCase() + l.substring(1)).join(" "));
