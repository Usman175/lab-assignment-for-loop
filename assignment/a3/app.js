//question 3
var tb = +prompt("enter which table u want ??", "2,3,4,5,6 to more");
var iteration = +prompt("how many iteration you want", "1 to more ");
for (var i = 1; i <= iteration; i++) {
    document.write(tb + " x " + i + "=" + tb * i + "<br>");
}
