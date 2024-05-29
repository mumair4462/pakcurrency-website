let success = 0;
function ClearErrors(ID, id) {
    document.getElementById(id).innerHTML = "";
    var element = document.getElementById(ID);
    element.style.borderColor = '#ced4da';
    element.classList.remove('error');
    element.classList.add('sucess');
}
function error(ID, id, message) {
    console.log(id);
    console.log(ID);
    var element1 = document.getElementById(ID);
    element1.className = "form-control error";
    element1.style.borderColor = '#b02a37';
    var element2 = document.getElementById(id).innerHTML = message;
    console.log(element1);
    console.log(message);
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
    var bool = true;
    var name = document.getElementById('name').value.trim();
    if (name.length <= 2) {
        error("name", "fname", "name min 3 char");
        bool = false;
    }
    else {
        ClearErrors("name", "fname");
    }
    var email = document.getElementById('email').value.trim();
    if (!isEmail(email)) {
        error("email", "femail", "Not a Valid Email");
    }
    else {
        ClearErrors("email", "femail");
    }
    var phone = document.getElementById('phone').value;
    if (phone.length != 11) {
        error("phone", "fphone", "phone number must be 11 digit");
        bool = false;
    }
    else {
        ClearErrors("phone", "fphone");
    }
    validDatachack();
    return bool;
}  
function validDatachack()
{
    fomeCon = document.getElementsByClassName('form-control');
        if(fomeCon[6].className=="form-control sucess"&&fomeCon[7].className=="form-control sucess"&&fomeCon[8].className=="form-control sucess")
        {
            // success=1;
            // if(success==1) {
                alert("Successfully Submit");
            // }
        }
        // else
        // {
        //     success=2;
        // }
}  
