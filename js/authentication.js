var btnLogin = document.getElementById("btnLogin");
var inputEmail = document.querySelector("#inputEmail");
var inputPassword = document.querySelector("#inputPassword");

btnLogin.addEventListener("click", () => {
  firebase
    .auth()
    .signInWithEmailAndPassword(inputEmail.value, inputPassword.value)
    .then(() => {
      window.location.replace("dashboard.html");
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert(errorMessage);
    });
});
