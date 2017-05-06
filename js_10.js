var student=[
	{name:'david',mark:88},
	{name:'vinoth',mark:77},
	{name:'divya',mark:88},
	{name:'ishitha',mark:95},
	{name:'thomas',mark:68}
];
//if(student[0].mark)
//student.grade=0;
console.log(Object.keys(student[0]));
for(i=0;i<student.length;i++)
{
console.log(student[i].mark);
if(50<=student[i].mark && student[i].mark<=60){
	grade='f';
}
if(60<=student[i].mark && student[i].mark<=70){
	grade='D';
}
if(70<=student[i].mark && student[i].mark<=80){
	grade='C';
}
if(80<=student[i].mark && student[i].mark<=90){
	grade='B';
}
if(90<=student[i].mark && student[i].mark<=100){
	grade='A';
}
student[i].grade=grade;
}
console.log(student);

