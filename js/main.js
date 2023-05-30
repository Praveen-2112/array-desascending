var arr=[];
var resulte=[];
var size=parseInt(prompt("Enter the size of value"))
for(let n=0; n<size; n++)
{
	arr[n]=parseInt(prompt("Enter the value of to arangede ascending order"+(n+1)));
}
document.write("input array"+arr );
document.write("<br>");
for(let i=0; i<arr.length; i++)
{
	for(let j=i+1; j<arr.length; j++)
	{
		if(arr[i]<arr[j])
		{
			var temp=arr[j];
			arr[j]=arr[i];
			arr[i]=temp;
		}
	}
	resulte.push(arr[i]);
}
document.write("descending order is"+resulte);