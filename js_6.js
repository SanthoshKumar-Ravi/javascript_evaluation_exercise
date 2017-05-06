var a=[2,23,23,34,56,34];
var counter=0;
var unique=a.filter(function(){

	for(i=0;i<a.length;i++)
	{
		for(j=i+1;j<a.length;j++)
		{
			if(a[i]==a[j])
			{
				console.log("a[i] is "+a[i]+"a[j] is "+a[j]);
				a[j]=0;

				/*if(a[i]=='undefined' a[j]=='undefined')
				//{
					console.log("hi");
					counter=counter+1;}
			}*/
		}
	}
	for(i=0;i<a.length;i++)
	{
		if(a[i]==0)
		{
			for(j=i;j<a.length;j++)
			{
			a[i]=a[i+1];
		}
	}}
	var a2=[];
	
	for(i=0;i<a.length-1;i++)
	{
		a2[i]=a[i];
	}

return a2;

});

console.log(counter);
console.log(unique.slice(0,a.length-));