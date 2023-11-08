/*Exercise#24:

More Conditional Tests: You don’t have to limit the number of tests you 
create to 10. If you want to try more comparisons, write more tests.
 Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

let myage=45;
let myedcuation='master'
let myname ='shahid';
console.log(`I am 45 year old and currently i am working completing the master`)
console.log(myedcuation==='master' )
console.log(myedcuation!=='master' )
 const lowerCase=myedcuation.toLowerCase();
 console.log(lowerCase==='master')
 console.log(lowerCase==='Master')
 let Num1= 10;
let Num2= 5;

console.log(Num1 === Num2); 
console.log(Num1 !== Num2); 
console.log(Num1 > Num2);   
console.log(Num1 < Num2);   
console.log(Num1 >= Num2);   
console.log(Num1 <= Num2);
 console.log(myname=='shahid' &&  myage==45)
 console.log(myname=='tufail' &&  myage==45)
 console.log(myname=='shahid' ||  myage==45)
 console.log(myname=='tufail' ||  myage==40)
  
 let iteminarray=[1,2,3,4,5,7]
 
 console.log(iteminarray.includes(3))
 console.log(iteminarray.includes(6))
 console.log(!iteminarray.includes(3))
 console.log(!iteminarray.includes(6))
 