"use strict";
/*Great Magicians: Start with a copy of your program from Exercise 39. Write a
function called make_great() that modifies the array of magicians by adding the
 phrase the Great to each magician’s name. Call show_magicians() to see that
 the list has actually been modified.*/
const magicians_name = ['magician1', 'magician2', 'magician3'];
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = `${magician[i]} has his own class`;
        console.log(`${magician[i]}`);
    }
}
show_magicians(magicians_name);
make_great(magicians_name);
show_magicians(magicians_name);
