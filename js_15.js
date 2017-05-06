//stringify and parse

var jsonStr = {"mike":"Book","jason":"sweater","chels":"iPad"};
var json_str=JSON.stringify(jsonStr);
console.log(typeof json_str);
var json_par=JSON.parse(json_str);
console.log(json_par);
console.log(typeof json_par);
console.log(json_par.mike);


// //exercise
 var ex='{"mike":"Book","jason":"sweater","chels":"iPad"}';
 var ex1=JSON.parse(ex);
 console.log(ex1.mike);