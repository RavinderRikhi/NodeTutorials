/**
 * 
 */
exports = function(){
	console.log('Hello');
}

console.log(exports); //is a function
console.log(module.exports);//is an empty object

//Since exports and module.exports points to same object which
//is passed by reference while executing

//but on line 4 exports is assigned a value which is a function
//which breaks the reference and exports points to a different spot on memory
//which is a function but module.exports still point to an empty object
