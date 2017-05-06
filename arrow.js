//noormal functins

var multiply=function(x,y){
	return x*y;
}

var multiply_arrow=(x,y) =>{ x=6;return x*y};
arrow=multiply_arrow(5,6);
console.log(arrow);


var multiply_arrow_oneparameter=x => { return  x*x;}
arrow_one=multiply_arrow_oneparameter(5);
console.log(arrow_one);



//object literal
var obj_lit=function(id,name){
	this.id=id;
	this.name=name;
	console.log(id+" "+name);
}

obj_lit(2,"john");

var obj_lit_arrow=(id,name)=>{this.id=id;this.name=name;return "kAVYA";}
var id_ret=obj_lit_arrow(2,'john');
console.log(id_ret);



//if one parameter is there,it will return implicitly
var obj_lit_arrow_one_parameter=id =>{return id*id;}
 var id_ret=obj_lit_arrow_one_parameter(2);
 console.log(id_ret);
