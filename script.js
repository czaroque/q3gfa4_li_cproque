var a = prompt("Kindly input a number of your choice: ");
var b = prompt("Kindly input another number of your choice: ");
var c = prompt("Kindly input the last number of your choice: ");

if(isNaN(a) == true || isNaN(b) == true || isNaN(c) == true){
    window.alert("input real numbers only pls:(");
}
else{
    determineTriangle(a, b, c);
}
function determineTriangle(a, b, c){
    if (a == b == c){
        window.alert("The triangle is an EQUILATERAL TRIANGLE");
    }
    else if (a == b || b == c || c == a){
        window.alert("The triangle is an ISOSCELES TRIANGLE");
    }
    else{
        window.alert("The triangle is a SCALENE TRIANGLE");
    }
}