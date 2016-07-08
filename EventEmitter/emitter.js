/**
 * 
 */

//Create an object using function constructor so that multiple emitters can be created
function Emitter(){
	this.events = {};
}

//Adding listener method for a specific event an attaching it to the prototype of the function so that
//it is inherited by every object made using this constructor 
Emitter.prototype.on = function(type,listener){
	this.events[type] = this.events[type] || []; //making sure this.events exist
	this.events[type].push(listener);//the listener function is pushed/added to the event object so that only listener functions are related to specific event 
}

//The reaction of the event will be executing the listener functions related to the event
Emitter.prototype.emit = function(type){
	if(this.events[type]){
		this.events[type].forEach(function(listener){
			listener();
		});
	}	
}

module.exports = Emitter;
