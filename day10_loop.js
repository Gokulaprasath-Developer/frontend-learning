//LOOP - print the 'n' elements in array separatly at one go
//for-loop

for(i=0 ; i<10 ; i++) {
    
    console.log(i,"tvk");
}

//take member array as example
for (i=0 ; i<members.length ; i++) {
    console.log(members[i]);
}

//find only even number

for (i=0 ; i<=20 ; i++) {
    if(i % 2 == 0){
        console.log(i);
    }
}

//for-of- it is simple version of for loop
for(let data of members){
    console.log(data);
}

//for-in - it show the index(element-count) of the array
for(let i in members){
    console.log(i)
}
//object - only using for-in
let car = {
    brand:'kia', 
    model:'seltos',
    year:2020
}
for(let key in car){
    console.log(key,':',car[key]);
}

let char = ["roy","fox","trio","shear"]

char.forEach((data,i) => {
     console.log(data,i)
});
//here data can be any alphabet or word and "i" is index
