// With no host object.

var whatsMyName =function(excited, arg2, arg3){
	var ending = excited ? '!!' : '.'
	console.log('My name is ' + this.name + ending);
}

var alice = {
	name : 'Alice',
}



// Functions in Javasctipt are objects so they have properties
// and methods


// minimally, call takes one argument: a new 'this' vale
// whatsMyName.call(alice)

// call can also take any number of arguments, and pass them to the original function.

// whatsMyName.call(alice, true)


// apply is very similar to call, Apply has at most two arguments

whatsMyName.apply(alice, [true, 'arg2', 'arg3'])

var numbers = [1, 5, -2, 3.14159, 11]

// this is extremely clumsy and does not work at all if we don;t know ahead of time how big the array is.
// var result = Math.max(numbers[0], numbers[1], numbers[2], numbers[3])


// We dont care what the conts=xt is in this cae, so we set it to null. ALl that atters here is that we can pass in an argument as an array.
var result = Math.max.apply(null, [])
console.log(result)

// call and apply are just doifferent ways of calling a function woth a forced 'this' value

// bind does not call a function immediately, but it returns a new function with a bound value of this

var bob = {
	name : 'Bob',
}
var bobSaysHi = whatsMyName.bind(bob)

// calling bobSaysHi is the same as calling whatsMyName, except that 'this' is bound to the object bob.
bobSaysHi(false)


var carlos = {
	name : 'Carlos',
}

var carlosIsHappyToMeetYou = whatsMyName.bind(carlos, true)

carlosIsHappyToMeetYou(false)




// we lose our context for 'this'  when we assign this function to a new variable
var getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;



if( getUserMedia ){
	// we need 'this' to refer to the navigator
	getUserMedia = getUserMedia.bind(navigator)
}
else ('Get user media is not supported.')
}

getUserMedia()



