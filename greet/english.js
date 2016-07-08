/**
 * 
 */
var greetings = require('./greetings.json');//will return the object present literal in the json file and assign it to greetings

var greet = function(){
	console.log('Hello');
	console.log(greetings.en+" from JSON");
}

module.exports = greet;