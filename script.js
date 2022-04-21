function login() {

    let loginUser = document.querySelector(".usuario").value;

    let users = ["william_birkin", "ada_wong", "albert_wesker"];

    let resultado = document.getElementById("loginResult");

    for(i = 0; i < users.length; i++) {
        if(users.includes (loginUser)) {
            resultado.innerHTML = "WELCOME, " + loginUser;
            break;
        } else {
            resultado.innerHTML = "ACCESS DENIED! INVALID USERNAME."
            break;
        }
    }  
}







