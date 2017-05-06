console.log ('Input some code:');
//process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.once('data', function (someCode) {
	
	console.log ('Code: ' + someCode);
//var a=somecode.toArray();
console.log(a);

	process.stdin.pause();
});