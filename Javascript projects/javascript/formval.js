function validateForm() {
    var x = document.forms["form"]["firstname"].value;
    var y = document.forms["form"]["phonenumber"].value;

    if ( x == "") {
        alert("First name must be filled out, please.");
        return false;
    }  else if (isNaN(y) || y < 0 || y > 10) {
        alert("Please enter a valid number.");
        return false;
    } else if (y == "") {
        alert("Enter a number.")
        return false;
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


    

