let date_time = new Date();
document.getElementById("dateTime").innerHTML = date_time + "";

let userName = prompt("Hello, what is your name?");
if (userName == null || userName == "") {
    document.getElementById("user").innerHTML = "Welcome, " + "Visitor" + "<br> How are you?";
} else {
    document.getElementById("user").innerHTML = "Welcome, " + userName + "<br> How are you?";
}

function validateForm() {
    let fname = document.forms["myForm"]["fName"].value;
    let lname = document.forms["myForm"]["lName"].value;
    let genders = document.forms["myForm"]["gender"].value;
    let born = document.forms["myForm"]["birthday"].value;
    //let hobby = document.forms["myForm"]["hobby"].value;
    let swimming = document.getElementById("swimming").checked;
    let reading = document.getElementById("reading").checked;
    let file = document.forms["myForm"]["photo"].value;
    let citys = document.forms["myForm"]["city"].value;
    let colors = document.forms["myForm"]["color"].value;

    if (fname == "") {
        window.alert("Please enter your first name");
        return false;
    }

    if (lname == "") {
        window.alert("Please enter your last name");
        return false;
    }

    if (genders == "") {
        window.alert("Choose your gender");
        return false;
    }

    if (born == "") {
        window.alert("Choose your birth");
        return false;
    }

    if(swimming == false && reading == false){
        window.alert("Choose your hobby");
        return false;
    }

    if (file == "") {
        window.alert("Please choose your photo");
        return false;
    }

    if (citys == "") {
        window.alert("Please choose your city");
        return false;
    }

    if (colors == "") {
        window.alert("Please choose your color");
        return false;
    }

    window.alert("Congratulation, data success register!");

    return true;
}

function updateTextInput(val) {
    document.getElementById('rangeValue').value = val;
}