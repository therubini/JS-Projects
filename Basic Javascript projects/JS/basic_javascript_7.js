var x=38;
function scope() {
    document.write(20+x+"<br>");
}
function scope1() {
    document.write(100 + x + "<br>");
}
scope();
scope1();

function scope3() {
    var y=28;
    document.write(20 + y);
}
scope3();

function scope4() {
    console.log(20 + y);
}
scope4();

function date() {
    var hour= new Date().getHours();
    var hi;
    if ( hour <= 18) {
        hi= "How is your day?";
    }
    else {
        hi= "How is your evening?";
    }
    document.getElementById("hello").innerHTML= "The hour of the day is " + hour + ", " + hi;
}

function turing() {
    var j,r;
    j= document.getElementById("bot").value;
    
    if (j === "robot") {
        r= "Good! you're not a robot!";
    }
    else {
        r= "Wrong, you're a bot, all data will be wiped from your computer!! :)";
    }
    document.getElementById("real").innerHTML= "Your answer is "+ j + "."+ " "+ r;
}


function time_function() {
    var time = new Date().getHours();
    var reply;

    if (time < 12 == time > 0) {
        reply= "It is monrning time!";
    }    
    else if (time > 12 == time < 18) {
        reply= "It is the afternoon.";
    }
    else {
        reply= "It is evening time.";
    }
    document.getElementById("time_of_day").innerHTML= reply;
}  

