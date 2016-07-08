/**
 * 
 */
//Instead of creating a new object here we give the 
//module.exports the ability to create a new object 
//by assigning it a Function constructor which will be 
//different than greet3

function Greetr(){
	this.greeting = 'Hello World!!!';
	this.greet = function(){
		console.log(this.greeting);
	}
}

module.exports = Greetr;