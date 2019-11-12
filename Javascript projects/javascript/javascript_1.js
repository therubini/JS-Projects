function con_fun() {
    var games1;
    var x = document.getElementById("fav").value;
    var con_string1= "that's a great choice!!";
    var con_string2= "well, as long as your happy.";
    var con_string3= "um, ok?!";
    switch(x) {
        case "Playstation":
        case "playstation":
            games1= "Playstation " + con_string1;
        break;
        case "Xbox":
        case "xbox":
            games1= "Xbox " + con_string2;
        break;
        case "Nintendo":
        case "nintendo":
            games1= "Nintendo " + con_string3;
        break;
        case "PC":
        case "pc":
            games1= "PC " + con_string1;
        break;
       default:
            games1= "Do you even game, bro?";
        }
        document.getElementById("games").innerHTML= games1;
    }

        function hello_world_function() {
            var a = document.getElementsByClassName("click");
            a[0].innerHTML = "The text has changed!";
        }

        
        function cir() {
            var hi= document.getElementById("grp");
            var ctx= hi.getContext("2d");
            // create gradient
            var grad= ctx.createLinearGradient(0,0,0,270);
            grad.addColorStop(0, "black");
            grad.addColorStop(1,"white");
            ctx.fillStyle= grad;
            ctx.fillRect(0,0,500,300);
            // create circle
            ctx.beginPath();
            ctx.arc(225,120,80,0, 2 * Math.PI);
            ctx.stroke();
           
        }

