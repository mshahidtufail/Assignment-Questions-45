/*
Exercise#17:
Shrinking Guest List: You just found out that your new dinner table 
won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message
 saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your 
list. Each time you pop a name from your list, print a message to that person

letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know
 they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your
 list to make sure you actually have an empty list at the end of your program.*/

 
 const Guest=["azlaan","talaal","zain",];

for(let i=0; i<Guest.length; i++){
    console.log(`${Guest[i]}: "i will feel pleasure if you join me at dinner toaday". `);
    
}
console.log(`i hear, "${Guest[2]} is not joining me at dinner."`);

//Modify your list


const guestRemove=Guest.pop();
console.log(guestRemove);
console.log(Guest);

const guestadd=Guest.push("murtaza");
console.log(Guest);

//second inivitation

for(let i=0; i<Guest.length; i++){
    console.log(`${Guest[i]}: "i will feel pleasure if you join me at dinner toaday". `);
    
}

//informing people that you found a bigger dinner table.
for(let i=0; i<Guest.length; i++){
console.log(`${Guest[i]}: "this is to inform you taht i found a biger dinner table for more people"`);
}

//Add one new guest to the beginning of your array.

const guestAdd1=Guest.unshift("idress");
console.log(Guest);

//Add one new guest to the middle of your array.

Guest.splice(2,0,"ali");
console.log(Guest);

//Use append() to add one new guest to the end of your list.

Guest.push("jhon");
console.log(Guest);

//Print a new set of invitation messages, one for each person in list.

for(let i=0; i<Guest.length; i++){
    console.log(`${Guest[i]}: "i am iniviting you for dinner today at Home."`)

}
//EXERCISE # 17
//Shrinking Guest List: Add a new line that prints a message saying that you 
//can invite only two people for dinner.

let ShrinkingGuest="'you can invite only two people for dinner'"
console.log(`Hello,you are informed that ${ShrinkingGuest}`);

//Remove guests from your list one at a time until only two names remain in your 
//list. Each time you pop a name from your list, print a message to that person
// letting them know you’re sorry you can’t invite them to dinner.


console.log(Guest.pop()+": i am sorry because i cannot invite you for dinner.");
console.log(Guest.pop()+": i am sorry because i cannot invite you for dinner.");
console.log(Guest.pop()+": i am sorry because i cannot invite you for dinner.");
console.log(Guest.pop()+": i am sorry because i cannot invite you for dinner.");
console.log(Guest);

//Print a message to each of the two people still on your list, letting them 
//know they’re still invited.

for(let i=0;i<Guest.length;i++){ 
    console.log(`${Guest[i]}: "you are invited for dinner toaday". `);
}

//Remove the last two names from your list, so you have an empty list.
// Print your list to make sure you actually have an empty list at the 
//end of your program.

Guest.splice(0,2,);
console.log(Guest);
