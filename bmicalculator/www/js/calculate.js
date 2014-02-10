function calcuteBmi()
{
var val1=0;
val1 = document.getElementById('height').value;
var val2=document.getElementById('weight').value;
if(val1>0)
alert('Your Bmi is :'+(val2/(val1*val1)));
else
aler('Enter height!!')
}