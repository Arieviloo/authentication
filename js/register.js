var btnRegister = document.getElementById("btnRegister");
var inputEmail = document.querySelector("#inputEmail");
var inputPassword = document.querySelector("#inputPassword");

btnRegister.addEventListener("click", () => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(inputEmail.value, inputPassword.value)
    .then(() => {
      window.location.replace("index.html");
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);

      // ...
    });
});
