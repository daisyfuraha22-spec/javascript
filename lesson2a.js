//objects data type:
//an object in java is a data type that stores data in form of key value pairs.
let person = {
    Name: "FURAHA",
    Age: 22,
    isRegistered : true

};

console.log("the details of the persorn are",person)

// first method is by use of the square brackets 
console.log(person["Age"])
// second method is by use of the dot notation
console.log(person.Name)
//Check the data type
console.log(typeof(person))

// array data type
//this referes to collection of items that are on indexes
fruits = ["Mango","pinneaples","Melon","Apple","Lemon","Grapes"]
console.log("the entire array of fruits is:",fruits)

//to acccess items of an array we use the index 
console.log(fruits[3])

//you can slice items of an array
console.log(fruits.slice(2,5))
