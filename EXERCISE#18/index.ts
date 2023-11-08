/*
Exercise#18:
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/







//Print your array in its original order.
const places = ["London", "Islamabad", "Paris", "Växjö", "Malmö"];

console.log("origional order:",places);
//Print your array in alphabetical order without modifying the actual list.
const alphabeticalOrder=[...places].sort();
console.log(alphabeticalOrder);

//Show that your array is still in its original order by printing it.
console.log(places);
//Print your array in reverse alphabetical order without changing the order of the original list.
const sortedReverseAlphabetically=alphabeticalOrder.reverse();
console.log(sortedReverseAlphabetically);
//Show that your array is still in its original order by printing it again.
console.log(places);

//Reverse the order of your list. Print the array to show that its order has changed.

const reverse=places.reverse();
console.log("reversed:",reverse);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
const reversedAgain=reverse.reverse();
console.log("reversed again:",reversedAgain);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

reversedAgain.sort();
console.log(reversedAgain);
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

const sortedReverseAlphabeticallyAgain=reversedAgain.reverse();
console.log(sortedReverseAlphabeticallyAgain);