/**
 * 
 */

//creating the same module as inheriting EventEmitter part-2 using ES-6 classes 

'use strict';

var EventEmitter = require('events');

module.exports = class Greetr extends EventEmitter {  //can be used in place of util.inherits while implementing a module via classes
	constructor(){
		super();//calls the parent constructor method just like EventEmitter.call()
		this.greeting = 'Hello World';
	}
	
	greet(data){
		console.log(`${ this.greeting } : ${ data }`); //Using ES6 way of string manipulation
		this.emit('greet',data);//emitting the greet event
	}//adding greet method to the prototype of Greetr constructor method
}