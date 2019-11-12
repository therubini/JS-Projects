function call_loop() {
    var z2= ""
    var y2= 0
    while (y2 < 10) {
        z2 += "You're awesome!! ";
        y2++;
    }
    document.getElementById("loop").innerHTML= z2;
}

function length() {
    var string1="How many characters in this sentence?";
    var n=string1.length;
    document.getElementById("ok").innerHTML= n;
}

function for_loop() {
    var instruments=["piano","guitar", "drums","trumpet", "flute"];
    var content=""
    var i;
    for (i = 0; i < instruments.length; i++) {
        content += instruments[i] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML=content;
}

function array_function() {
    var str1 =[];
    str1[0] = "This is value 1 in the array index of 0";
    str1[1] = "This is value 2 in the array index of 1";
    str1[2] = "This is value 3 in the array index of 2";
    str1[3] = "This is value 4 in the array index of 3";
    document.getElementById("array").innerHTML= str1[2];

}

function constant_function() {
    const rifle= {type:"AR-15", brand:"Winchester", color:"blue"};
    rifle.color= "black";
    rifle.price= "3,300";
    rifle.speed= "3,052 ft/s"
    document.getElementById("constant").innerHTML="An " + rifle.type + " cost "
    + rifle.price + " and one of the largest brands is " + rifle.brand+". " 
    + "It travels " + rifle.speed + ".";
}

    var let1= 100;
    document.write("<br>" +let1 +"<br>");
    { let let1= 50;
        document.write(let1 +"<br>");
}
document.write(let1);

function return_fun() {

    
    return Math.PI;
}
var rub= return_fun();
document.write("<br>"+rub);

let dog = {
    Breed: "American Bully ",
    Color: "tan ",
    Name: "Conan ",
    description : function() {
        return "<br>" + "My dog's name was " + this.Name + " he was the color " + this.Color+
        "."+ " He was an " + this.Breed +".";
    }
};
document.getElementById("best").innerHTML= dog.description();

function break1() {
var text3= "";
var run;
for (run = 0; run < 10; run++) {
    if (run === 7) {break; }
    text3 +=  "The number is " + run + "<br>";
}
 document.getElementById("breaker").innerHTML= text3;
}

//This is a conintue statement that jumps an iteration
function continue1() {
    var text4="";
    var jum;
    for (jum= 0; jum < 10; jum++) {
        if (jum === 7) { continue; }
        text4 += "<br>The number is " + jum;
    }
document.getElementById("con3").innerHTML= text4;
}
