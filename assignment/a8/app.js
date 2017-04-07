// question 8
var inp = prompt("Enter Bakry Item Which You Can Find ","");
inp = inp.toLowerCase();
var bakry = ["cake", "apple pie", "cookie", "chips", "patties"];
if(inp===bakry[0]){
document.write("Cake Is <b>Available</b> at Index 0 in our Bakery");
}else if(inp===bakry[1]){
document.write("Apple Pie Is <b>Available</b> at Index 1 in our Bakery");
}else if(inp===bakry[2]){
document.write("Cookie Is <b>Available</b> at Index 2 in our Bakery");
}else if(inp===bakry[3]){
document.write("Chips Is <b>Available</b> at Index 3 in our Bakery");
}else if(inp===bakry[4]){
document.write("Patties Is <b>Available</b> at Index 4 in our Bakery");
}else{
    document.write("We Are Sorry. "+inp+" is <b>Not Available</b> in our Bakery");
}