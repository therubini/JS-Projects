function val_form() {
    var x = document.getElementById("fname").value;
    var y = document.getElementById("lname").value;
    if (x == "" || y == "") {
      alert("Oops! Please fill out First and Last name, thank you.");
      return false;
    }
  }