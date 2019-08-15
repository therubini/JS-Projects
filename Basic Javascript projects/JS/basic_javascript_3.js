function add() {
    var a,b,c;
    a=Number(document.getElementById("a").value);
    b=Number(document.getElementById("b").value);
    c= a + b;
    document.getElementById("math").innerHTML= c;
    }

function sub() {
    var d,e,f;
    d=Number(document.getElementById("d").value);
    e=Number(document.getElementById("e").value);
    f= d - e;
    document.getElementById("takeaway").innerHTML= f;
}

function mult() {
    var g,h,i;
    g=Number(document.getElementById("g").value);
    h=Number(document.getElementById("h").value);
    i= g * h;
    document.getElementById("times").innerHTML= i;
}

function div() {
    var j,k,l;
    j=Number(document.getElementById("j").value);
    k=Number(document.getElementById("k").value);
    l= j / k;
    document.getElementById("division").innerHTML= l;
}

function numbers() {
    var simple_math=(3*5)+(20/5);
    document.getElementById("answer").innerHTML="3 multiplied by 5 then add 20, finally divide by 5 gives you" + " " + simple_math +".";
    
}

function mod() {
    var m,n,o;
    m=Number(document.getElementById("m").value);
    n=Number(document.getElementById("n").value);
    o= m % n;
    document.getElementById("remainder").innerHTML= o;
}

function neg_op() {
    var x=38;
    document.getElementById("uniary").innerHTML= -x;
}
function inc() {
var x=10;
x++;
document.getElementById("in").innerHTML=x;
}

function dec() {
var y=10;
y--;
document.getElementById("de").innerHTML=y;
}

window.alert(Math.random() * 1000);

function math_pow() {
    document.getElementById("pow").innerHTML = Math.pow(8,2);

}

document.body.innerHTML =  
        "<p><b>Math Object Methods</b></p>" +
        "<p>Math.abs(-4.7): " + Math.abs(-4.7) + "</p>" + 
        "<p>Math.ceil(4.4): " + Math.ceil(4.4) + "</p>" + 
        "<p>Math.floor(4.7): " + Math.floor(4.7) + "</p>" + 
        "<p>Math.sin(90 * Math.PI / 180): " +  
                Math.sin(90 * Math.PI / 180) + "</p>" + 
        "<p>Math.min(0, 150, 30, 20, -8, -200): " + 
        Math.min(0, 150, 30, 20, -8, -200) + "</p>"; 



