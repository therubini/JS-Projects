function con() {
    var a1="This ";
    var b1="is a ";
    var c1="full sentence";
    var d1="!!!!!";
    var sentence=a1.concat(b1,c1,d1);
    document.getElementById("conc").innerHTML=sentence;
}

function slice_function() {
    var sentence="Hello, this is Jonathan. I'm going to get sliced.";
    var sliced=sentence.slice(25,34);
    document.getElementById("slice").innerHTML=sliced;
}

function awesome() {
    var sting1=document.getElementById("yo").innerHTML;
    document.getElementById("yo").innerHTML=sting1.toUpperCase();
}

function srch() {
var strg="The function will find the position value for where my name is located, Jonathan, and return the value below.";
var pos=strg.search("Jonathan");
document.getElementById("search").innerHTML=pos;
}

function numberstr() {
    var xx=38;
    document.getElementById("numstr").innerHTML=xx.toString();
}

function precision() {
    var pre= 1235.6545844545;
    document.getElementById("pre").innerHTML=pre.toPrecision(7);
}

function fixed() {
    var num1=251.235;
    var n1=num1.toFixed(1);
    document.getElementById("fix").innerHTML= n1;
}

function value_of() {
    var prim="string";
    var val1=prim.valueOf();
    document.getElementById("val").innerHTML= val1;
}