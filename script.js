function login() {

    //let divLoginResult = document.getElementById("loginResult");

    let loginUser = document.querySelector(".usuario").value;

    let users = ["willian_birkin", "ada_wong", "albert_wesker"];

    for(i = 0; i < users.length; i++) {
        if(users.includes (loginUser)) {
            alert("Welcome, " + loginUser);
            break;
        } else {
            alert("Access denied! Invalid username.")
            break;
        }
    }  
}







