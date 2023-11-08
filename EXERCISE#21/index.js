"use strict";
const PersonObject = [{
        name: "shahid",
        age: 45,
        height: "6f"
    },
    {
        name: "talaal",
        age: 10,
        height: "3f",
    }];
PersonObject.forEach((person, index) => {
    console.log(`${index + 1}.name=${person.name},age=${person.age},height=${person.height}`);
});
