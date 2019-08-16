function to() {
document.getElementById("demo").innerHTML= typeof "Jedi" + "<br>" + typeof 38;
}

function forever() {
    
    document.getElementById("inf").innerHTML= 2E310 + "<br>"+ -2E310;
}

function boo() {
    document.getElementById("false").innerHTML=10<2;
}

function boo1() {
    document.getElementById("true").innerHTML=10>2;
}

console.log(2+2);
console.log(10<1);

document.write("10" + 5); //This is coercion to put together to different data types

function eq() {
    document.getElementById("equal").innerHTML=[38==28,38==38];

}

function trieq() {
    document.getElementById("triple").innerHTML=[1===1,"one"===2,"one"===1,1===2];
}

function boo_logic() {
    document.getElementById("logic").innerHTML=[10<20 && 10<30, 2>10 && 2>1, 2<10 || 1<10, 10<10 || 20<10]; 
}

function not() {
    document.getElementById("funk").innerHTML=[!(7==8),!(7==7)];
}