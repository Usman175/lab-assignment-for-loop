
//question 9
var val = [24, 53, 101, 91, 12];
var largeval;
document.write("Array Items : ");
for(var i = 0 ; i<val.length ; i++){
if(val[i]<val[i+1]){
largeval = val[i+1];
}
document.write(val[i]+",");
}
document.write("<br> large Number In the array Is = "+ largeval); 