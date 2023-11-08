/*
Exercise#16:
More Guests: You just found a bigger dinner table, so now more space is
 available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end 
of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add 
one new guest to the end of your list. • Print a new set of invitation messages,
 one for each person in your list.*/

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