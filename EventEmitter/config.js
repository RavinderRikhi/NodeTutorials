/**
 * 
 */
//Instead of using the event name string again & again makes the application vulnerable
//for typos , So its more safer to define strings like these also called MAGIC STRINGS to 
//define them once inside some kind of a config file and using them when needed which will 
//reduce our effort to write such strings again & again and also makes the application safer 
//to run.
module.exports = {
		events:{
			GREET: 'greet',
			FILESAVED: 'filesaved',
			FILEOPENED: 'fileopened'
		}
}