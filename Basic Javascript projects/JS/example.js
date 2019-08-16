function nan() {
    document.getElementById("test").innerHTML=0/0;
}

function nan1() {
    document.getElementById("test1").innerHTML=isNaN("hello");
}

function nan2() {
    document.getElementById("test2").innerHTML=isNaN(38);
}