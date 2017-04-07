//question 6
var arr = [];
var val1 = +prompt("Enter How Many time You enter Value ", "marzi hai teri :) :P");
for (var i = 0; i < val1; i++) {
    var info = prompt("Enter Information ");
    arr.push(info);

}
document.write("Number Of Item = " + arr.length + "<br>");
for (var j = 0; j < val1; j++) {
    document.write(arr[j] + "<br>");
}