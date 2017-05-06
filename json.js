//example 1 normal array
var json_1=['a','b','c'];
var json_1_str=JSON.stringify(json_1);
console.log(JSON.parse(json_1_str));

//example 2 normal array
var json_2={"name":"santhosh","age":"20","location":"ec"};
var json_2_str=JSON.stringify(json_2);
console.log(JSON.parse(json_2_str));

//example 3 date and function
var json_3={"name":"santhosh","age":"20","age":"function(){return 20;}","birth":"1995-07-18"};

var json_3_str=JSON.stringify(json_3);
console.log(JSON.parse(json_3_str));

//to perfrom function operations after stringify
var text=JSON.parse(json_3_str);
text.age=eval("(" + text.age + ")");
text.birth=new Date(text.birth);
//console.log("(" + text.age + ")");
console.log(text.age+" "+text.name+" "+text.birth);




