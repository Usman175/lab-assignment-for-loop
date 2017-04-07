//question 14
var scores  = [12, 45, 3, 22, 34, 50];
var loca;
var inpt=+prompt("enter value what u can search on array","[12, 45, 3, 22, 34, 50]"); 
for(var g=0;g<scores.length;g++){
if(inpt===scores[g]){
loca = g;
}
}
document.write("Actual Values In Array = ");
for(var q=0;q<scores.length;q++){

document.write(scores[q]+",");
}
document.write("<br>After putting value = ");
for(var f=0;f<=loca;f++){

document.write(scores[f]+",");
}