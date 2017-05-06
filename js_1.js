var date=new Date();
console.log(date);
console.log("current date is  "+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear());
var hour=date.getHours();
var minute=date.getMinutes();
var seconds=date.getSeconds();
if(hour<10)
{
	hour="0"+hour;
}if(minute<10)
{
	minute="0"+minute;
}
if(seconds<10)
{
	seconds="0"+seconds;
}

console.log("current time is  "+hour+":"+minute+":"+seconds);
