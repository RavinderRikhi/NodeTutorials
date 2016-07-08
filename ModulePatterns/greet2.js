/**
 * 
 */

//Instead of replacing the exports object here we are adding
// a greet method to the module.exports object

module.exports.greet = function(){
	console.log('Hello World!');
}