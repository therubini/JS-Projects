//document.write("Hello World!"); writes in body
//alrt("Hello World!"); pop up
var a="This is a string.", b="This is a string with quotation\'s in it, \"Hello World!\""+" I\'m concatenating"+" these elements."+" ";
var b=b.fontcolor("green");
var c="This is concatenating with color!"+" "+"This is 3+3 added"+ " ";
var c=c.fontcolor("red");
window.alert(a);
document.write(b,c);
document.write(3+3); //---this will perform the function of 3+3. (notice no quotations)
function my_first_function() {
    var string="This is text!";
    document.write(string);
}
function displayDate() {
    document.getElementById("demo").innerHTML=Date();
}

function big(x) {
    x.style.height = "54px";
    x.style.width = "84px";
}

function normal(x) {
    x.style.height = "26px";
    x.style.width = "90px";
  }
