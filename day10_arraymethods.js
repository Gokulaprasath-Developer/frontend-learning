//map- same as "foreach" but map return the value for each won't-undefined.

// let ch = char.map((data,i)=>{
//   return(data);
// })

//filter - used to filter the element
let ch = char.filter((data,i)=>{
  return data.length > 3;
})
console.log(ch);

//find - check for the condition and return the first found value
let c = char.find((data,i)=>{
  return data.length>3;
})
console.log(c)

//slice - takes a particular item from the array
//(start,end[-1])
console.log(char.slice(1,4))

//splice - addition and deletion in an array
//(start,deletecount,addition_data)
char.splice(0,2,"robo","chiti");
console.log(char);

//JAVA SCRIPT is a SYNCRONISED PROGRAMMING LANGUAGE
//sync- do a task one-by-one
//async- do multitask simuntaneously
//browesr help to convert JAVAsync to async

console.log(1);
setTimeout(()=>{
    console.log(2)
},0);
console.log(3);
setTimeout(()=>{
    console.log(4)
},1000);
console.log(5);
console.log(6);
setTimeout(()=>{
    console.log(7)
},100);


//non-primitive data type so updates the new value
let x = {name:"raj",age:20}
let y = x
y.age = 25
console.log(x,"----x");
console.log(y,"----y");
