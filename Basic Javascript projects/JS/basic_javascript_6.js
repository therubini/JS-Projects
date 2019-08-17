function ride_function() {
    var height, can_ride;
    height=document.getElementById("height").value;
    can_ride=(height < 52 ) ? "You are to short":"You are tall enough";

    document.getElementById("ride").innerHTML= can_ride + "  to ride.";
}

function age_function() {
    var height1, join;
    height1=document.getElementById("height1").value;
    join=(height1 < 4) ? "You're seeking power at such a young age. I see much darkeness in you. Try back again when you're 4.":"Prepare to be a Jedi!";

    document.getElementById("age").innerHTML=join;
 }

 function vehicle(make, model, year, color) {
     this.vehicle_make=make;
     this.vehicle_model=model;
     this.vehicle_year=year;
     this.vehicle_color=color;
 }

    var Jack= new vehicle("Dodge", "Viper",2020,"red");
    var Emily= new vehicle("Jeep","Trail Hawk", 2019, "white and black");
    var Erik= new vehicle("Ford","Pinto",1971, "mustard");

 function myfunction() {
        document.getElementById("keywords_and_constructors").innerHTML=
        "Erik drives a "+ Erik.vehicle_color + "-colored "+ Erik.vehicle_model +
        " manufactured in " + Erik.vehicle_year +".";
 }

 function knights_crusade(order, founded, colors) {
     this.knights_crusade_order=order;
     this.knights_crusade_founded=founded;
     this.knights_crusade_colors=colors;
 }

 var Templars= new knights_crusade("Order of Solomon's Temple", 1119, "white shield with a red cross");
 var Hospitaller= new knights_crusade("The Order of Knights of the Hospital of Saint John of Jerusalem", 1070, "Black shield with a Maltese cross");
 var Teutonic = new knights_crusade("The Order of Brothers of the German House of Saint Mary", 1190, "White mantle with a black cross");

 function knights() {
     document.getElementById("info").innerHTML=
     "The Templars fought in the crusades. Their order was called "+ Templars.knights_crusade_order + "."+ " They were founded in "+Templars.knights_crusade_founded +
     ", and they traditionally wore the colors- "+ Templars.knights_crusade_colors + ".";
1 }

//var color=var won't let me declare a reserved variable 

function force_user(moral,code) {
    this.force_user_moral=moral;
    this.force_user_code=code;
}

var Jedi= new force_user("light", "peace");
var GreyJedi= new force_user("light and dark", "justice");
var Sith= new force_user("dark", "domination");

function star() {
    document.getElementById("farse").innerHTML=
    "The Grey Jedi used the "+ GreyJedi.force_user_moral + " forces to achieve their goals. Their goals were usually aligned with "+ GreyJedi.force_user_code +".";
}

function count_function() {
    document.getElementById("counting").innerHTML= count();
    function count() {
        var starting_point=9;
        function plus_one() {starting_point +=1;}
        plus_one();
        return starting_point;
    }
}

