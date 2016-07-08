//  CHAPTER 1 : MODULES, EXPORTS and REQUIRE

//=========================================================================================================
/*//pass by value in case of primitive variables 
function change(b){
	b = 2;
}

var a = 1;
change(a);
console.log(a);

//pass by reference in case of Objects
function changeObj(d){
	d.prop1 = function(){};
	d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);*/

//=========================================================================================================
//Immediately invoked function expression IIFE
/*var firstname = 'Jane';

(function(lastname){
	var firstname = 'John';
	console.log(firstname);
	console.log(lastname);
}('Doe'));

console.log(firstname);*/


//=========================================================================================================
// 		More on Require
//If no js file is found inside require then it will look for a folder
//with the same name and will include the index.js file inside that 
//folder

/*var greet = require('./greet'); //will return the object inside index.js module.exports inside greet folder

greet.english();
greet.hindi();
greet.spanish();
*/

//=========================================================================================================
/*
 *   Module Patterns
var greet = require('./ModulePatterns/greet1');//will return a function which replaces the module.exports object in greet1.js gets directly assigned to greet 
greet();	//greet method is called then


var greet2 = require('./ModulePatterns/greet2').greet;//will return a greet method which is attached to module.exports object  
greet2();//greet2 is assigned a method and in this line the function is called


var greet3 = require('./ModulePatterns/greet3');//greet3 will be assigned the object containing the greeting variable and greet method 
greet3.greet();

greet3.greeting = 'Changed hello world!';//

var greet3b = require('./ModulePatterns/greet3');//Assigns same object assigned to greet3 to greet3b because the object created once on line 54 is cached and reused again and again
//changes made to it will change contents of every object assigned to same file
greet3.greet();//The contents gets changed on line  57 because both greet3 and greet3b reference to the same object


var Greet4 = require('./ModulePatterns/greet4');//Greet4 will be assigned the Function constructor so each time the greet4 is used under require a new object is created
//This is different to greet3 as a new distinct object will be created rather assigning same object to multiple variables 
var grtr = new Greet4();
grtr.greet();


var greet5 = require('./ModulePatterns/greet5').greet; //Most use pattern making only relevant details available and protecting the others 
greet5();//Only greet method is exposed in it not the greeting variable protecting it from outside  
*/

//=========================================================================================================

//  exports vs module.exports
//Although exports and module.exports points to same object coz an object passed is always passed by reference
//module and exports are passed to the function for execution so there should be no problem if we use exports instead 
//of module.exports as shown 

/*var greet = require('./ExportsVsModuleExports/greet');//module.exports is an empty object so it will return an empty object and assign it to greet
//greet(); //will not run as greet is assigned an empty object module.exports


var greet2 = require('./ExportsVsModuleExports/greet2');
greet2.greet();*/

//=========================================================================================================
//		Requiring native modules

/*
//Some of these modules are global like console rest are used by pulling it in using the require method e.g. util, http , etc

var util = require('util'); //Native js module present inside lib folder inside the javascript core to use util

var name = 'Ravinder';
var greeting = util.format('Hello, %s',name); //format method uses to create string using wildcards like c++
console.log(greeting);
*/

//In case you named your module same as a native module
//then describe its complete path inside require otherwise it will 
//include the native module instead of your module


//=========================================================================================================
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//  CHAPTER 2: EVENTS and the EVENTS EMITTER


//Something to which we can respond to can be called as an event or an action
//There are 2 separate kinds of events in nodejs 
//	1. System Events: From c++ side in nodejs core inside libuv library which deals with events coming from a computer are original events like file to be read is open or closed
//	2. Custom Events: From JavaScript side in javascript core inside Event Emitter which are custom events is like a fake event because javascript doesn't have an eventing concept or object

//=========================================================================================================

//object properties and methods

/*
var obj = {
		greet: 'Hello'
}

//using keys for an object to return the value corresponding to the key
console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

//functions and arrays 

var arr = [];

//can push a number,object,string,etc also a function coz functions in JavaScript are first class
arr.push(function(){
	console.log('Hello 1');
});

//can push any number of function in an array
arr.push(function(){
	console.log('Hello 2');
});

arr.push(function(){
	console.log('Hello 3');
});

//Using for each function to loop through an array of function is highly recommended
//for each item in the array arr function passed will execute 
//item passed to the function will be the item inside the array 
//which in this case are functions

arr.forEach(function(item){
	item();
});
*/

//=========================================================================================================
// Event Emitter part-1

//Creating & using a basic Event Emitter module
/*
var Emitter = require('./EventEmitter/emitter');

var emtr = new Emitter();

emtr.on('greet',function(){
	console.log('Someone, somewhere said hello');
});//creating an event 'greet' and adding a listener method related to it

emtr.on('greet',function(){
	console.log('A greeting occured');
});//this will add a new listener function to an already created greet event, so, now there are 2 methods related to one event  

console.log('Hello!');
emtr.emit('greet');//will launch the listener functions related to the greet event
*/

//=========================================================================================================
//Event Emitter part-2

//Using node's inbuilt Event emitter module 

/*
var Emitter = require('events'); //Inbuilt event management module provided by NodeJS 
//Returns a function constructor 
var eventConfig = require('./EventEmitter/config').events;//will return the events property under the exports object
//the events property carries the magic strings to be used for emitting or creating an event like greet,file saved, etc

var emtr = new Emitter(); //creating an object using the function constructor  


emtr.on('greet',function(){
	console.log('Someone, somewhere said hello');
});//creating an event 'greet' and adding a listener method related to it

emtr.on('greet',function(){
	console.log('A greeting occured');
});//this will add a new listener function to an already created greet event, so, now there are 2 methods related to one event  


emtr.on(eventConfig.GREET,function(){
	console.log('Someone, somewhere said hello & this listener is created using the config file');
});//using the greet property carrying the magic string for emitting or creating greet event
//this practice reduces the use of magic number again & again thus reducing the chance for a typo

emtr.on(eventConfig.GREET,function(){
	console.log('A greeting occured & this listener is created using the config file');
});

console.log('Hello!');
emtr.emit('greet');//will launch the listener functions related to the greet event
*/


//=========================================================================================================

//	Object.create and  Prototypes

//Instead of assigning a constructor methods and using prototyping for accomplishing INHERITENCE 
//through prototype chain, there is one more way i.e. using object.create method

/*
var person = {
		firstname: '',
		lastname: '',
		greet: function(){
			return this.firstname+' '+this.lastname;
		}
}

var john = Object.create(person); //since we are passing an object, it is passed by reference making person a prototype to which john is pointing to.
//So john will have access to all the properties and methods of person

john.firstname = 'John';//this will add a new property firstname to john object i.e. 'John' is attached to john object
john.lastname = 'Doe';//this will add a new property lastname to john object
//still the greet method is available 

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';
//now john and jane, both of these objects have access to greet method

console.log(john.greet());
console.log(jane.greet());
*/
//=========================================================================================================
// Inheriting from Event Emitter part-1 

//util node module helps in inheriting using function constructors
//the inherits method helps in this task which comes under util module
//this method takes 2 function constructors as parameters and links them making a prototype chain 
//the objects created using the first parameter, function constructor will carry 
//now all the object created using the first parameter function constructor will have access to methods and properties 
//of the second parameter function constructor along with its methods and properties
/*
var EventEmitter = require('events'); //since we want to inherit event emitter we need the events module, this will return the function constructor for EventEmitter
var util = require('util');// to use the inherits method for implementing inheritance we need util

function Greetr(){
	//EventEmitter.call(this); //attaching the properties of emitter to the newly created object making the inheritance complete 
	this.greeting = 'Hello World';
}//this will act as our function constructor which will inherit the event emitter

util.inherits(Greetr, EventEmitter);//this statement will make the Greetr function constructor add the methods and properties of EventEmitter function constructor to its prototype chain

Greetr.prototype.greet = function(data){
	console.log(this.greeting);
	this.emit('greet',data);//we need to inherit an event emitter. So, to implement it we need a point to emit an event,
	//this will emit 'greet' event, in case we need some data to be passed then pass it along with event name 
}//adding a greet method to the prototype chain of the Greetr function constructor 

var greeter1 = new Greetr();//will assign an object using the Greetr function constructor, the object will have access to both EventEmitter and Greetr methods and properties  

greeter1.on('greet',function(data){
	console.log('Someone Greeted! : '+data);
});//Data passed while emitting the event is also to be processed while adding the listener method

greeter1.greet('Ravi');
*/

//=========================================================================================================

//	.CALL and .APPLY for invoking functions

/*
var obj = {
		name: 'John Doe',
		greet: function(){
			console.log(`Hello ${ this.name }`);//The ES6 way for string concatenation wrapping the object's property with ${} and writing string inside `` also called Template literal 
		}
}

obj.greet();//usual calling or invoking a method of an object
obj.greet.call({name:'Jane Doe1'});  //calling or invoking a method of an object, passing an object with this will replace the native object with the object passed 
obj.greet.apply({name:'Jane Doe2'});
*/

//Although both of the call and apply are similar as both is a way to use a specific method of an object for specific objects
//The difference is that apply lets you invoke the function with arguments as an array; call requires the parameters be listed explicitly.
//For e.g obj.greet.call({name:'Jane Doe'});
//And theFunction.call(valueForThis, arg1, arg2, ...);

//=========================================================================================================

// Inheriting from Event Emitter part-2

//In the Inheriting from Event Emitter part-1 a scenario was missing which involved adding the properties and methods of EventEmitter
//to the newly created object as you can see the properties of only Greetr function constructor was added but we were inheriting
//the EventEmitter so the properties of EventEmitter should also be added to the new object for example

/*
var util = require('util');

function Person(){
	
	this.firstname = 'John';
	this.lastname = 'Doe';
}

Person.prototype.greet = function(){
	console.log('Hello '+this.firstname+' '+this.lastname);
}//Adding a method to the prototype of Person function constructor

function Policeman(){
	//Person.call(this);//Super constructor which connects the object created with the properties of inherited function constructor
	//As the passed parameter i.e. 'this' is an object so, it is passed by reference attaching the object with the properties of inherited function constructor 	
	
	this.badgenumber = '1234';
}//Policeman will have a badge number

util.inherits(Policeman,Person);//Policeman inheriting Person function constructor
var officer = new Policeman();//New object created carrying the methods of both Policeman and Person but Properties of only Policeman
officer.greet();//will show the first and lastname undefined if the created object is not passed to the Super Constructor because inherits connects the prototypes off two function constructors but not the Properties
//Otherwise it will show them
*/

//=========================================================================================================

//	ES6 Classes

/*
'use strict';//this will make JavaScript engine to be more careful, mostly used when using the new features in a JS file
//we are using classes which is a new aspect in JavaScript so we use 'use strict'

class Person{
	constructor(firstname,lastname){
		this.firstname = firstname;
		this.lastname = lastname;
	}//Under the hood works exactly like creating a function constructor of the class name so, it is creating a function Constructor 'Person'
	
	greet(){
		console.log('Hello '+this.firstname+' '+this.lastname);
	}//added to the Prototype chain in new way but under the hood still a function greet is added to the prototype of the Person function constructor
	
}//classes in JavaScript are different than classes in other languages 
//like c++ or java because although it is using class keyword but still the object will be created
//using the function constructor

var john = new Person('John','Doe');
john.greet();

var jane = new Person('Jane','Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
*/

//=========================================================================================================

// Inheriting from Event Emitter part-3

/*'use strict';

var Greetr = require('./ModuleClass/greetr');//adding the module created using classes in an ES6 way

var greeter1 = new Greetr();
greeter1.on('greet',function(data){
	console.log('Someone greeted: '+data);
});

greeter1.greet('Ravi');*/

//=========================================================================================================
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  CHAPTER 3: Asynchronous Code, libuv, The Event Loop, Streams, Files, etc

//-> JavaScript is Synchronous i.e. in V8 java engine only one process(line of code) executing at any point of time. Not javaScript its engine runs Synchronously
//Where as NodeJS does things asynchronously i.e multiple lines of code executing simultaneously as V8 also resides inside NodeJS so as V8 runs also other things are running simultaneously

//-> CALLBACKS : A callback is a function that is passed to some other function which we assume will be
//invoked at some point. The function 'calls back' invoking the function you gave it when it is done doing its work

//-> System Events handled inside the c++ side of core are actually handled by a C library called 'libuv' its also embedded inside nodeJS
//Its idea here are managing events coming from the operating system closer to the machine.
//Inside node we have V8 and JS is synchronous i.e. V8 runs on line at a time. Also inside node there is 'libuv' written specifically to deal with 
//things happening lower level i.e. events occurring in OS. It connects by requesting something to the OS like to download something r opening a file ,etc

//'libuv' has a queue inside of it which contains the list of events that have completed which occurs simultaneously while V8 is running its code.
//Also inside 'libuv' there is 'Event Loop'(a while loop) which happens to be most important part. Through which 'libuv' constantly checks the queue if something has happened while V8 is running.
//After an event is complete like a download or opening a file, the event gets placed in the queue from the OS. There can be more than one events inside the queue between each loop of event loop.
//During each loop if 'libuv' sees if something is complete i.e. inside the queue. It processes it and calls the 'CallBack' of the function
//The 'Callback' function will be executed inside V8 synchronously all though while executing lines of code the event loop is running, events are added to the queue,
//requests are made to the OS thus making the whole NodeJS Asynchronous

//NodeJS is also Non-Blocking & event driven alongside asynchronous.
//Event driven means that we are asking for things to happen like a download or opening a file which then gets event notification when its done. The loop is constantly checking for that inside 'libuv'
//Non Blocking means that doing other things without stopping your program from running which is made possible by Node's doing thing asynchronously rather waiting a single process to end first making node
//High performance

//=========================================================================================================

//  Buffers
//Buffers are created on c++ side of the node core and made available on the JS side and it stores binary data

/*
var buf = new Buffer('Hello','utf8');//Buffer is available globally, no need for a require for function to access it
//Buffer if not mentioned will use utf8 encoding by default but one can use other by mentioning them like ascii, base64, binary, hex, etc 
//The size of buffer will be equal to the string length provided while creating an object

console.log(buf); //will show the object with the number of encoded characters
console.log(buf.toString());//will show the contents of the buffer in its original value
console.log(buf.toJSON());//will return/print an object in JSON
console.log(buf[2]);//will show the character at 2nd position inside a buffer like an array

buf.write('world');//will override the buffer with provided info rather than appending new data as buffer once created can never be resized
console.log(buf.toString());
*/

//=========================================================================================================

//	CallBacks
// A function passed to some other function which we assume to be invoked at some point of time

/*
function greet(callback){
	console.log('hello');
	var data = {
			name: 'John Doe'
	};
	callback(data);
}//passing a function named call back and invoked at the end

greet(function(data){
	console.log('A callback was invoked');
	console.log(data);
});

greet(function(data){
	console.log('A different callback was invoked');
	console.log(data.name);
});
*/

//=========================================================================================================

//	fs and Filesystem

/*
var fs = require('fs'); //fs is the built in module which deals in file system and is present in JavaScript side of the core. This returns an object

var greet = fs.readFileSync(__dirname+'/greet.txt','utf8');//used to read binary contents of a file asynchronously . The __dirname is used to get the path of the home directory
//The method loads the contents of the file into a buffer and then passed on to the variable
//The synchronous nature makes the program to wait till the file is read halting the process and making the user wait

console.log(greet);

var greet = fs.readFile(__dirname+'/greet.txt',function(err,data){
	if(!err)	console.log(data.toString());
});//This method is an asynchronous one i.e. the program won't wait till the complete file is read and passed to the variable
//The method will return a buffer object with contents of the encoded contents of the file. Passing coding scheme will return the string of contents rather than buffer object
//The asynchronous nature is achieved using the callback function which makes the script to be executed by the V8 although contents of the file was being read
//After the contents are read the function is passed is then executed which is executed after the method is called after the whole script is executed
//These type of call backs are called ERROR FIRST CALLBACK
//Error first callbacks are callbacks take an error object as their first parameter
//The error object will carry info if there is an error encountered otherwise it will be null
//The data contains the result what the invoked function returns or null if an error has been occurred

console.log('Done');//This will run before the callback of the above asynchronous method gets executed
*/

//=========================================================================================================

//	Streams
//	Streams inherit from Event emitter i.e. they have access to methods like .on and .emit 
//Different types of Streams are : Readable Stream, Writable Stream, Duplex Stream, Transform Stream, PassThrough Stream
//Readable stream inherits from Sreams
//Streams are merely a base/Abstract class which inherits from Event Emitter i.e. no new Streams object is created, it is inherited by the Streams mentioned above

/*
var fs = require('fs');//file system module
var readable = fs.createReadStream(__dirname+'/Streams/greet.txt',{encoding : 'utf8',highWaterMark: 16*1024});//file reading stream, by default buffer size is 64kb
//By passing the encoding key in the options object, the chunk received will be a string rather than a buffer object
//the highWaterMark key in the option object will give the size of the buffer used

var writable = fs.createWriteStream(__dirname+'/Streams/greetCopy.txt');//Will create a writable stream

readable.on('data',function(chunk){ //'data' is the event emitted by 'readable' when the file is completely read
	console.log(chunk.length);
	writable.write(chunk);//write the chunk onto the writable stream
});//listening for the data event start the stream reading
*/

//=========================================================================================================

//	Pipes
//	A pipe is a medium to connect two stream by writing to one stream what is being read from another
//In Node you pipe from a Readable stream to a Writable stream

/*
var fs = require('fs');
var zlib = require('zlib');//The zlib module provides compression functionality implemented using Gzip and Deflate/Inflate.

var readable = fs.createReadStream(__dirname+'/Streams/greet.txt');

var writable = fs.createWriteStream(__dirname+'/Streams/greetCopy.txt');

var compressed = fs.createWriteStream(__dirname+'/Streams/greet.txt.gz');//creating a write stream to the compressed file

var gzip = zlib.createGzip();//creates a transform stream(readable and writable), Whenever a chunk is sent to it compresses the it

readable.pipe(writable); //will read data chunk from the readable stream and will write it to the writable stream passed as a parameter to pipe function
//pipe function also returns destination stream i.e. the object on which first function works  

readable.pipe(gzip).pipe(compressed);//the readable stream is piped to gzip to compress the stream, the pipe method will return the gzip stream which is writable too which gets piped to the gz file writable stream
//A chunk rides on readable stream which is piped to the gzip stream to compress the chunk which is then piped to the compressed stream to pass the data to gz file 
//Compressing or decompressing a stream (such as a file) can be accomplished by piping the source stream data through a zlib stream into a destination stream
*/

//=========================================================================================================
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  CHAPTER 4: HTTP and being a web Server

//	HTTP-PARSER
//The HTTP Parser is a C program embedded in node which parses request and responses. It takes info which is text in some format & other binary data and then parses it i.e. breaks it up look at it 
//and knows what to do with it. It breaks apart info which comes along HTTP request and HTTP response like headers, version, message body, status codes and then we can have these pieces of data and then make decision with it.
//The HTTP Parser is wrapped inside the nodejs's JavaScript side of code which also adds some more things in it.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Building  a Web Server

/*
var http = require('http');

http.createServer(function(req,res){	//Method to create a server which takes a callback which will act as an event listener, has 2 parameters 
//req represents the request object used when there is a need to generate a request or to operate on the request object 
//res represents the response object used when there is a request coming and we need a response for it 	
	
	res.writeHead(200,{'Content-Type': 'text/plain'});	//HTTP response starts by describing the header first parameter is the status code and second one is the header object in name:value pair which this object is representing is the MIME type
	res.end('Hello World');	//to end this response project we use end method in which we are passing the message body i.e. content of the response page 'Hello world'
	
}).listen(4000,'127.0.0.1');//when a server object is created using createServer method, it has a listen method which takes the port number for the server and address of the server
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//	HTML and TEMPLATE

/*
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	
	res.writeHead(200,{'Content-Type':'text/html'});//creating the header of the response with MIME type as text/html to read the response body as a HMTL file
	var html = fs.readFileSync(__dirname + '/ServerSample/index.htm','utf8');//read contents of the html file and using the encoding utf8 to convert it to a string rather than a buffer so that the values of the placeholder variables can be replaced with the original value 
	var PlaceHolder = 'Different value than PlaceHolder...';	//the original value of the placeholder variable inside the index.htm template
	html = html.replace('{PlaceHolder}',PlaceHolder);	//replacing the placeholder with its original value dynamically at compile time
	res.end(html);//adding the body having html content to the response object 
	
}).listen(3000,'127.0.0.1');
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Using streams to improve performance

/*
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	
	res.writeHead(200,{'Content-Type':'text/html'});
	fs.createReadStream(__dirname + '/ServerSample/index.htm','utf8').pipe(res);//connecting readable file stream and piping it to the response writable stream asynchronously improving the performance by reducing the memory load  

}).listen(3000,'127.0.0.1');
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//	Outputting JSON

/*
var http = require('http');

http.createServer(function(req,res){
	
	res.writeHead(200,{'Content-Type':'application/json'});
	var obj = {
			firstname: 'John',
			lastname: 'Doe'
	};//serializing data i.e. saving a particular state of the object
	
	//res.end(obj.toString());//will output like console.log(obj.toString()) i.e. [object, Object] rather than showing the values inside the object literal
	res.end(JSON.stringify(obj));//will shoe the contents inside the object literal because JSON.stringify does the de-serialization of the data object i.e. to display or manipulate the value of serialized object
	
}).listen(3000,'127.0.0.1');
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++