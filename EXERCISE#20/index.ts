/*Exercise#20:

Think of something you could store in a array. For example, you could make
 a list of mountains, rivers, countries, cities, languages, or anything else
  you’d like. Write a program that creates a list containing these items.*/

  const countrieslist=["pakistan","india","denmark","sweden","canada"];

console.log(`"List of countries":`)  
countrieslist.forEach((country,index)=>{
    console.log(`${index+1}. ${country}`);
})