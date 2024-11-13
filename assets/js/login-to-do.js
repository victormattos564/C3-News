function visualizarsenha() {
    var passwordInput = document.getElementById("password");
    var verButton = document.getElementById("versenha");

    if (passwordInput.type == "password") {
        passwordInput.type = "text";
        verButton.innerText = "😉";
    } else {
        passwordInput.type = "password";
        verButton.innerText = "😌";
    }
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;



  
        if ((username == "Professor" || username == "Victor") && (password == "123")) {
            window.location.replace("./../../pages/to-do-list.html");
        } else if((username == "visitante" || username == "Visitante") && (password == "visitante" || password == "123")) {
            window.location.replace("./../../pages/to-do-visitante.html");
         
        } else {
            document.getElementById("mensagem").style.display = "block";
        }
    


    if ((username == "Professor" || username == "Victor") && (password == "123" )) {
        window.location.replace("./../../pages/to-do-list.html");
      } else {

        document.getElementById("mensagem").style.display = "block";
      }
      
      
}