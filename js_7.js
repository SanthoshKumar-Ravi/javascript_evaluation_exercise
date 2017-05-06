var newarr=[];
function function_remove(arr1,arr2){
	
	for(i=0;i<arr1.length;i++)
	{
		if(arr2.indexOf(arr1[i]) === -1)
		{
			newarr.push(arr1[i]);
		}
	}
	for(i=0;i<arr2.length;i++)
	{
		if(arr1.indexOf(arr2[i]) === -1)
		{
			newarr.push(arr2[i]);
		}
	}
	console.log(newarr);
return newarr;

}
var a=[1,2,2,3,4];
var b=[2,3,4,5];
var new_arr=function_remove(a,b);
console.log(newarr);
