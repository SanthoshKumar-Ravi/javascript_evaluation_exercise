

console.log ('Input some code:');
//process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.once('data', function (someCode) {


	function validate(x){
		console.log("fddggfg"+x+"dfgfdgd");
		var reg=/^([a-z0-9A-Z-_]+@[a-z0-9A-Z]+\.[A-Za-z]{3,})$/;
		//console.log("inside if");
		console.log(/^[a-z0-9]$/.test(x));
		if(reg.test(x)){
			console.log("true");
			return true;
		}
		return false;
	}
ans=validate(someCode.trim());
console.log(ans);
	process.stdin.pause();



});
