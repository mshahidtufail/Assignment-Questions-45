"use strict";
/*Sandwiches: Write a function that accepts a array of items a person wants on a
sandwich. The function should have one parameter that collects as many items as
the function call provides, and it should print a summary of the sandwich that
is being ordered. Call the function three times, using a different number of
arguments each time.*/
function sandwiches(items) {
    console.log("Making your sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}
sandwiches(["Meat"]);
sandwiches(["Meat", "Cheese"]);
sandwiches(["Meat", "Cheese", "Tomato"]);
