//API: APPLICATION PROGRAMMING INTERFACE
//to get response from backened = API call will be used to make
//SYNC TO ASYNC

//in js 3 ways to transform from sync to async
//callback: this is basically a function passed into a argument of another function that executes laater.
//this have a drawback called "callback hell". So, don't use it in real life scenario.
function test(db) {
    db()
}
function mest() {
    console.log("mest")
}
test(mest)

//promise - this method can be partially(60%) used and pending untill the execution done.
//[fetch] - promise
//fetch - pendingstatus untill done and fullfilment-then /or/ failure-catch
let data = fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then((data)=>{
      console.log(data,"-then")
 })
 .catch((error)=>{
      console.log(error,"-catch")
 })

 //ASYNC & await: this must be used in real life scenario.
const handlefetch = async () => {
    try{
        let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let realdata = await data.json()
    console.log(realdata,"done")
    }catch(error){
        console.log(error,"error")
    }
}
handlefetch()
