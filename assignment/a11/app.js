//question 11
var val = [24, 53, 101, 91, 12];
var largeval;
var smallval = val[0];
document.write("Array Items : ");
for(var i = 0 ; i<val.length ; i++){
if(val[i]<val[i+1]){
largeval = val[i+1];
}
}
for(var i = 0 ; i<val.length ; i++){
if(smallval>val[i]){
smallval = val[i];
}
document.write(val[i]+",");
}
document.write("<br> Small Number In the array Is = "+ smallval);
document.write("<br> large Number In the array Is = "+ largeval);

