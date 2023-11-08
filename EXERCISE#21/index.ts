/*
Exercise#21:
They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.*/
interface person{
    name:string;
    age:number;
    height:string;

    }


const PersonObject=[{
        name:"shahid",
        age:45,
        height:"6f"},
        {

        name:"talaal",
        age:10,
        height:"3f",
        }];

    PersonObject.forEach((person,index)=>{
        console.log(`${index+1}.name=${person.name},age=${person.age},height=${person.height}`);
        });