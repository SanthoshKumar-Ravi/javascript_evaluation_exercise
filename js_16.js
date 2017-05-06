var o= {
"One":"1",
"Two":"2",
"Three":"3",
"Four":"4"
}

//console.log(Object.values(object));
 console.log("hi");
 var val=o.map(names);
 function names(){
 	console.log("hi");
 }

 val=o.map(function(obj){
		var val1={};
		val1['name']=myObj[i].name;
		i=i+1;
		return val1;
	});
