// question 10
var val = [24, 53, 101, 91, 12];
var smallval = val[0];
document.write("Array Items : ");
for(var i = 0 ; i<val.length ; i++){
if(smallval>val[i]){
smallval = val[i];
}
document.write(val[i]+",");
}
document.write("<br> Small Number In the array Is = "+ smallval);
