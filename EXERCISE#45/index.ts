/*Exercise#45
Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. It should 
then accept an arbitrary number of keyword arguments. Call the function with the
required information and two other name-value pairs, such as a color or an 
optional feature. Print the Object that’s returned to make sure all the 
information was stored correctly.*/


interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
}

function createCar(manufacturer: string, modelName: string, ...args: any[]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Parse additional arguments (key-value pairs) and add them to the car object
    for (let i = 0; i < args.length; i+=2) {
        const key: string = args[i];
        const value: any = args[i + 1];
        car[key] = value;
    }

    return car;
}


const carObject: Car = createCar("Toyota", "Camry", "color", "silver", "year", 2023, "optionalFeature", "sunroof");
console.log(carObject);
