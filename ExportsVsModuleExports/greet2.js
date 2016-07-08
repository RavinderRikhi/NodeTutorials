/**
 * 
 */

exports.greet = function(){
	console.log('Hello!');
}

console.log(exports);//will show the same object as module.exports which contains a function
console.log(module.exports);//will show the same object as exports which contains a function

//exports and module.exports points to same object as both are passed as a reference to the function to get executed
//and since the exports object is mutated the object it is pointing to, remains the same as module.exports
//Unlike the file greet.js in which exports was assigned a new function which ultimately assigned new 
//memory location to exports, breaking its connection with the module.exports 