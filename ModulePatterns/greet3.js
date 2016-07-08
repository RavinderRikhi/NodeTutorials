/**
 * 
 */
//Using a Function Constructor to create a new object
//Replacing the empty module.exports object with the newly created 
//object using Function Constructor to module.exports 

function Greetr(){
	this.greeting = 'Hello World!!';
	this.greet = function(){
		console.log(this.greeting);
	}
}

module.exports = new Greetr();