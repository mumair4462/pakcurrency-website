function ClearErrors2(ID, id) {
    document.getElementById(id).innerHTML = "";
    var element = document.getElementById(ID);
    element.style.borderColor = '#ced4da';
    element.classList.remove('error');
}
function error2(ID, id, message) {
    var element1 = document.getElementById(ID);
    element1.className = "form-control error";
    element1.style.borderColor = '#b02a37';
    document.getElementById(id).innerHTML = message;
}
const isEmail2 = (email) => {
    var atsymbol = email.indexOf("@");
    var dot = email.lastIndexOf('.');
    var dot1 = email.indexOf('.');
    if (atsymbol < 1)
        return false;
    else if (dot <= atsymbol + 3)
        return false;
    else if (dot1 < 1)
        return false;
    else
        return true;
}
console.log("hell");
function ValidationFome2() {
    let bool = true;
    var email = document.getElementById('email2').value.trim();
    if (!isEmail2(email)) {
        error2("email2", "femail2", "Not a Valid Email!");
        bool = false;
    }
    else {
        ClearErrors2("email2","femail2");
    }
    var password = document.getElementById('password').value.trim();
    if (password.length < 6) {
        error2("password", "fpassword", "Max length of password is 6!");
        bool = false;
    }
    else {
        ClearErrors2("password", "fpassword");
    }
    var cpassword = document.getElementById('cpassword').value.trim();
    if (cpassword == password) {
        ClearErrors2("cpassword", "fcpassword");
    }
    else {
        error2("cpassword", "fcpassword", "Password does't mach please enter again!");
        bool = false;
    }
    return bool;
}  