/**
 * 
 */
//Only the function is exposed not the variable
//So the variable will be protected from outside making it hidden
//It is called the Revealing Module Pattern

var greeting = 'Hello World!!!!';

function greet(){
	console.log(greeting);
}

module.exports = {
		greet:greet
}
	