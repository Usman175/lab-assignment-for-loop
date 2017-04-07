//question 7
document.write("<b>Counting</b>" + "<br>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ",");
}
document.write("<br><b>Reversing</b>" + "<br>");

for (var j = 10; j >= 1; j--) {
    document.write(j + ",");
}
document.write("<br><b>Even</b>" + "<br>");

for (var k = 0; k <= 20; k++) {
    if (k % 2 == 0) {
        document.write(k + ",");
    }

}
document.write("<br><b>OOD</b>" + "<br>");

for (var k = 0; k <= 20; k++) {
    if (k % 2 != 0) {
        document.write(k + ",");
    }

}
document.write("<br><b>Series</b>" + "<br>");

for (var k = 2; k <= 20; k += 2) {
    document.write(k + "k,");
}