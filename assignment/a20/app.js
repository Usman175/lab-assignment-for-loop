//question 20
// part a
var valinp =+prompt("Enter Value How Many Line You Want");
document.write("PATTERN A <br>");
for(var q=1 ;q<=valinp ; q++ ){
for(var s=1 ;s<=5 ; s++ ){
document.write("*");
}
document.write("<br>");
}
document.write("PATTERN B<br> ");
//part b
for(var n=1 ;n<=valinp ; n++ ){

for(var m=1 ;m<=n ; m++ ){
document.write("*");
}
document.write("<br>");

}

document.write("PATTERN C<br> ");
//part c
for(var q=valinp ;q>=1 ; q-- ){

for(var s=1 ;s<=q ; s++ ){
document.write("*");
}
document.write("<br>");

}