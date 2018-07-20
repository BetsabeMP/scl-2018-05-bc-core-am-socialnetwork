//Seccion profile
//Imprime los datos de usuario en la pagina
firebase.auth().onAuthStateChanged(function (user) {
  if (user != null) {
    userData.innerHTML += `
    <img src="${user.photoURL}" alt="foto de perfil del usuario" id="photoProfile">
    <p>${(user.displayName)}</p>
    `
  }
});

//Mostrar las opciones para agregar nuevos datos
editProfile = () => {
  configUser.style.display = "block";
  console.log('hola');


}

//Base de datos de usurios para mostrar en el perfil
function users() {
  const currentUser = firebase.auth().currentUser;
  const inputEmail = inputConfigEmail.value;
  const inputTelefono = inputConfigPhone.value;
  const inputAlumno = inputConfigNameStudent.value;
  const inputCurso = inputConfigCourse.value;

  //Esta funcion guarda los datos en la base de datos y tambien vacia los input al guardar
  document.getElementById('inputConfigEmail').value = '';
  document.getElementById('inputConfigPhone').value = '';
  document.getElementById('inputConfigNameStudent').value = '';
  document.getElementById('inputConfigCourse').value = '';


  //Nueva llave para la coleccion de datos
  const newProfile = firebase.database().ref().child(`userProfile`).push().key;
  //Esto es lo que guarda en la base de datos
  firebase.database().ref(`userProfile/${newProfile}`).set({
    usuario: currentUser.displayName,
    email: inputEmail,
    telefono: inputTelefono,
    alumno: inputAlumno,
    curso: inputCurso
  });

  //imprime los datos ingresados en el pantalla
  firebase.database().ref(`userProfile`).once("value", function (pullData) {
    let data = pullData.val();
    for (let key in data) {
      userData2.innerHTML = `
    <p>${("Email: " + data[key].email)}</p>
    <p>${("Teléfono: " + data[key].telefono)}</p>
    <p>${("Alumno: " + data[key].alumno)}</p>
    <p>${("Curso: " + data[key].curso)}</p>`
    }
  });

  configUser.style.display = "none";




}

