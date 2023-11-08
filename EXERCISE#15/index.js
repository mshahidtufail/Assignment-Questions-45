"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make
the dinner, so you need to send out a new set of invitations.
 You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end
of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
 in your list.*/
//the guest who can’t make it
const Guest = ["azlaan", "talaal", "zain",];
for (let i = 0; i < Guest.length; i++) {
    console.log(`${Guest[i]}: "i will feel pleasure if you join me at dinner toaday". `);
}
console.log(`i hear, "${Guest[2]} is not joining me at dinner."`);
//Modify your list
const guestRemove = Guest.pop();
console.log(guestRemove);
console.log(Guest);
const guestadd = Guest.push("murtaza");
console.log(Guest);
//second inivitation
for (let i = 0; i < Guest.length; i++) {
    console.log(`${Guest[i]}: "i will feel pleasure if you join me at dinner toaday". `);
}
