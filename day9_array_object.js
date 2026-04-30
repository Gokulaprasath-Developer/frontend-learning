//array : collection of data - "[]"
let members = ["vijay","bussy anand","adhav arjun","tvk members"];

//length: used to find the number of elements in the array
//starts from (1-N)
console.log(members.length);

//index: to pick a particular element from the array
//starts from(0-N) and "[]"- here this will automatically mean't like INDEX

console.log(members[0]);
console.log(members[members.length - 3]);

//array 4 basic methods- pop(remove last element),push(add element at back),shift(remove element in front),unshift(add element in the front)

//push
members.push("ecr saravanan","satish");
console.log(members)

//pop
members.pop();
console.log(members)

//shift
members.shift();
console.log(members)

//unshift
members.unshift("ecr saravanan","satish");
console.log(members)

//Object- "{}"- key and value - for eg: name:gokul

let cardetails = {
    company:"toyota",
    model:"fortuner",
    price:"50lac"
}
console.log(cardetails.model);
//or
console.log(cardetails["model"]);

//ARRAY OF OBJECTS - thisis used in real-life scenario

let carlist = [
    {
        company:"toyota",
        model:"hyrder",
        price:"25lac"
    }
    ,
    {
        company:"hyndai",
        model:"creta",
        price:"27lac"
    }
    ,
    {
        company:"mahindra",
        model:"thar",
        price:"15lac"
    }
]

//this can be handled as array because it is in "[]"
console.log(carlist.length);
console.log(carlist[1]);

//here also we can use array methods
carlist.push({
    company:"posche",
        model:"mx11",
        price:"1cr"
})

console.log(carlist)

 //arrow function

 const greet = (name) => {
    console.log("welcome",name);
 }

 greet("gokul");
 greet("vijay")

 //anonymous function
 
 (name) => {
    console.log("welcome",name);
 }arr
