"use strict";
/*City Names: Write a function called city_country() that takes in the name
 of a city and its country. The function should return a string formatted like
 this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value
that’s returned.*/
function city_country(city, country) {
    return `"${city},${country}"`;
}
let city_country1 = city_country('Lahore', 'Pakistan');
let city_country2 = city_country('Malmo', 'Sweden');
let city_country3 = city_country('Paris', 'France');
console.log(city_country1);
console.log(city_country2);
console.log(city_country3);
