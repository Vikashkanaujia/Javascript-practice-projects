let eyeicon = document.getElementById("eye-icon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "./image/eye-close.png" ;
    }
    else{
        password.type ="password";
        eyeicon.src = "./image/eye-open.png"  ;
    }
}