window.onload = () => {
  //Función para reconocer si hay un usuario conectado e ingresar al perfil de éste
  firebase.auth().onLogInOrUp((user) => {
    if (user) {
      //Si nos logeamos, entramos al perfil del usuario
      logIn.style.display = "none";
      profile.style.display = "block";
    } else {
      //Si no logeamos, nos mantenemos en la página de sign in o sign up
      logIn.style.display = "block";
      profile.style.display = "none";
    }
  });
};

//Función para registrarse en la aplicación
function signUp() {
  const emailValue = email.value;
  const passwordValue = password.value;
  firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
    .then(() => {
      alert('Usuario registrado con éxito.');
    })
    .catch((error) => {
      console.log("Error de firebase > " + error.code);
      console.log("Error de firebase, mensaje > " + error.message);
    });
}

//Función para entrar a la aplicación por usuarios registrados
function signIn() {
  const emailValue = email.value;
  const passwordValue = password.value;
  firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
    .then(() => {
    })
    .catch((error) => {
      console.log("Error de firebase > " + error.code);
      console.log("Error de firebase, mensaje > " + error.message);
    });
}

//Función para salir de la aplicación
function logOut() {
  firebase.auth().signOut()
    .then(() => {
      alert('¡Adiós, nos vemos pronto!');
    })
    .catch();
}

//Función para logear con FaceBook
function loginFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.setCustomParameters({
    'display': 'popup'
  });
  firebase.auth().signInWithPopup(provider)
    .then(() => {
      console.log("Login con facebook");
    })
    .catch((error) => {
      console.log("Error de firebase > " + error.code);
      console.log("Error de firebase, mensaje > " + error.message);
    });
}