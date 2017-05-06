var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}
];
//exercise 1
for(i=0;i<myObj.length;i++)
{	console.log("hi "+myObj[i].occupation);
	if(myObj[i].occupation=='Programmer')
	{
		//console.log(myObj[i]);
	}

}

//exercise 2
var myobj_1=myObj;
//myobj_1.sort(function(a,b){return a.age-b.age});
//console.log(myobj_1);


//exercise 4
var val1=[];

var val=[];
var i=0;
//var val=myObj.map(names);
/*
val=names();
	function names(){
	//for(i=0;i<myObj.length;i++){
		console.log(myObj.length);
	for(index=0;index<myObj.length;index++){
			name=myObj[index].name;
			val1[index]=name;
		//console.log(val1[index] +"  "+myObj[index].name+"at index "+index);
	}
	return val1;
}
*/


	val=myObj.map(function(obj){
		var val1={};
		val1['name']=myObj[i].name;
		i=i+1;
		return val1;
	});
console.log(val);