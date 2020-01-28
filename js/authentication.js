var btnLogin = document.getElementById("btnLogin");
var inputEmail = document.querySelector("#inputEmail");
var inputPassword = document.querySelector("#inputPassword");

btnLogin.addEventListener("click", () => {
  firebase
    .auth()
    .signInWithEmailAndPassword(
      document.querySelector("#inputEmail").value,
      document.querySelector("#inputPassword").value
    )
    .then(() => {
      console.log("deu bom");
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);

      // ...
    });
});
