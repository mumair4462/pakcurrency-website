function ClearErrors(ID, id) {
    document.getElementById(id).innerHTML = "";
    var element = document.getElementById(ID);
    element.style.borderColor = '#ced4da';
    element.classList.remove('error');
}
function error(ID, id, message) {
    var element1 = document.getElementById(ID);
    element1.className = "form-control error";
    element1.style.borderColor = '#b02a37';
    document.getElementById(id).innerHTML = message;
}
const isEmail = (email) => {
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
function ValidationFome() {
    var i=0;
    var email = document.getElementById('email').value.trim();
    if (!isEmail(email)) {
        error("email", "femail", "Not a Valid Email");
        i=1;
    }
    else {
        ClearErrors("email","femail");
    }
    if(i==1)
       return false;
    else 
       return true;
}  