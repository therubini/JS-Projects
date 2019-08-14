function add() {
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c= a + b;
    document.getElementById("answer").value= c;
    }

function myfunction() {
    var sentence="Using an operator";
    sentence += " this sentenced is concated.";

    document.getElementById("con").innerHTML= sentence;
}




